// oauth2 认证
// https://github.com/mulesoft/js-client-oauth2
import ClientOAuth2 from 'client-oauth2'
import config from '@/config'
const qs = require('qs')

class Oauth2 {
  constructor(options) {
    this._app_id = options.appApiKey
    this._client_secret = options.appSecretKey
    this._redirect_uri = options.appRedirectUri
    this._access_token_uri = options.appAccessTokenUri
    this._authorization_uri = options.appUserAuthorizationUri
    this._scope = options.appScope

    this._token = null

    this.oAuth2Client = new ClientOAuth2({
      clientId: this._app_id,
      clientSecret: this._client_secret,
      accessTokenUri: this._access_token_uri,
      authorizationUri: this._authorization_uri,
      redirectUri: this._redirect_uri,
      scopes: this._scope,
    })
  }

  static makeState() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    )
  }

  get appId() {
    return this._app_id
  }

  set appId(value) {
    this._app_id = value
  }

  get clientSecret() {
    return this._client_secret
  }

  set clientSecret(value) {
    this._client_secret = value
  }

  get redirect_uri() {
    return this._redirect_uri
  }

  set redirect_uri(value) {
    this._redirect_uri = value
  }

  get token() {
    return this._token
  }

  set token(value) {
    this._token = value
  }

  get accessTokenUri() {
    return this._access_token_uri
  }

  set accessTokenUri(value) {
    this._access_token_uri = value
  }

  get authorizationUri() {
    return this._authorization_uri
  }

  set authorizationUri(value) {
    this._authorization_uri = value
  }

  get scope() {
    return this._scope
  }

  set scope(value) {
    this._scope = value
  }

  get state() {
    return localStorage.getItem('OAUTH2_STATE')
  }

  set state(state) {
    localStorage.setItem('OAUTH2_STATE', state)
  }

  removeState() {
    localStorage.removeItem('OAUTH2_STATE')
  }

  getUserAuthorize() {
    if (this._app_id === null) {
      throw new Error('appid must not be null')
    }
    if (this._redirect_uri === null) {
      throw new Error('redirect uri must not be null')
    }
    this.state = Oauth2.makeState()
    return this.oAuth2Client.code.getUri({ state: this.state })
  }

  getToken(originalUrl) {
    const that = this
    return new Promise((resolve, reject) => {
      this.oAuth2Client.code
        .getToken(originalUrl)
        .then(function (token) {
          that.token = token
          resolve(token)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // TODO 刷新令牌
  refreshToken() {
    const that = this
    return new Promise((resolve, reject) => {
      that.token
        .refresh()
        .then(function (token) {
          token

          that.token = token

          resolve(token)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  expired() {
    return this.token.expired()
  }

  getFromOAuth2Server(redirect_uri) {
    let baseWithSearch = redirect_uri.split('#')[0]
    let parsedUrl = ''
    // 本地环境
    if (process.env.NODE_ENV === 'development') {
      parsedUrl = qs.parse(redirect_uri.split('?')[1])
      this._state = null
      this._code = parsedUrl.code
    } else {
      parsedUrl = qs.parse(baseWithSearch.split('?')[1])
      if (this._state === null) {
        throw new Error("You did't set state")
      }
      if (parsedUrl.state === this.state) {
        this._state = null
        this._code = parsedUrl.code
      } else {
        this._state = null
        throw new Error(`Wrong state: ${parsedUrl.state}`)
      }
    }
  }

  get code() {
    if (this._code === null) {
      throw new Error('Not get the code from authorization server!')
    }
    const code = this._code
    this._code = null
    return code
  }
}

let oauth2 = new Oauth2(config)

export default oauth2
