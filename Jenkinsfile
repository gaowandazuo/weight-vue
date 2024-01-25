pipeline {
  agent {
    kubernetes {
      inheritFrom 'nodejs base'
      containerTemplate {
        name 'nodejs'
        image 'node:16.18.1'
      }
    }
  }
    environment {
        PROJECT_VERSION = "2.0.0"
        PROJECT_NAME = "wuu-pure"
    }
    parameters {
        choice(
        description: '请你选择要进行哪种操作',
        name: 'MODE',
        choices: ['Deploy2K8S', 'Deploy2Artifactory','Deploy2Harbor']
      )
        choice(
                description: '请你选择要部署那个环境',
                name: 'DEPLOY_ENVIRONMENT',
                choices: ['Deploy2dev', 'DeployALL','Deploy2Demo']
        )
        string(
        description: '应用模式：ALL;说明：Harbor的凭证ID;',
        name: 'DOCKER_CREDENTIAL_ID',
        defaultValue: 'docker-id1',
    )
        string(
        description: '应用模式:Deploy2K8S&Deploy2Harbor;说明:Harbor的地址',
        name: 'REGISTRY',
        defaultValue: 'gi-docker.repo.inspur.com',
    )
        string(
        description: '应用模式:Deploy2K8S&Deploy2Harbor;说明:Harbor的项目名称',
        name: 'DOCKERHUB_NAMESPACE',
        defaultValue: 'sxm',
    )
        string(
        description: '应用模式:Deploy2K8S&Deploy2Harbor;说明:镜像名称',
        name: 'IMAGE_NAME',
        defaultValue: 'wuu-pure',
    )
        string(
        description: '应用模式:Deploy2K8S&Deploy2Harbor;说明:镜像TAG',
        name: 'IMAGE_TAG',
        defaultValue: '2.0.0',
    )
        string(
        description: '应用模式:Deploy2K8S&Deploy2Harbor;说明:容器和pod开放端口号',
        name: 'PORT1',
        defaultValue: '80',
    )
        string(
        description: '应用模式:Deploy2K8S;说明:开发环境kubeconfig凭证ID',
        name: 'KUBECONFIG_CREDENTIAL_IDA',
        defaultValue: 'kub-develop',
    )
        string(
        description: '应用模式:Deploy2K8S;说明:开发环境kubeconfig凭证ID',
        name: 'KUBECONFIG_CREDENTIAL_IDB',
        defaultValue: 'kub-release',
    )
        string(
        description: '应用模式:Deploy2K8S;说明:仿真环境kubeconfig凭证ID',
        name: 'KUBECONFIG_CREDENTIAL_IDC',
        defaultValue: 'kub-master',
    )

        string(
        description: '应用模式:Deploy2K8S;说明:kubeSphere项目名称',
        name: 'APP_NAMESPACE',
        defaultValue: 'wuu',
    )
        string(
        description: '应用模式:Deploy2K8S;说明:pod和服务名称',
        name: 'APP_NAME',
        defaultValue: 'wuu-pure',
    )
        string(
        description: '应用模式:Deploy2K8S;说明:存储卷1',
        name: 'VOLUME_NAME1',
        defaultValue: 'volume-wuu1',
    )
        string(
        description: '应用模式:Deploy2K8S;说明:存储卷2',
        name: 'VOLUME_NAME2',
        defaultValue: 'volume-wuu2',
    )
    string(
        description: '应用模式:Deploy2K8S&Deploy2Harbor;说明:Harbor的地址',
        name: 'REGISTRY',
        defaultValue: 'gi-docker.repo.inspur.com',
    )
        string(
        description: '应用模式:Deploy2K8S&Deploy2Harbor;说明:Harbor的项目名称',
        name: 'DOCKERHUB_NAMESPACE',
        defaultValue: 'sxm',
    )
        string(
                description: '应用模式：Deploy2Harbor;说明：公网Harbor的凭证ID;',
                name: 'DOCKER_CREDENTIAL_ID_NET',
                defaultValue: 'docker-id-net',
        )
        string(
                description: '应用模式:Deploy2Harbor;说明:公网Harbor的地址',
                name: 'REGISTRY_NET',
                defaultValue: 'repo.lczhsl.com',
        )
        string(
                description: '应用模式:Deploy2Harbor;说明:公网Harbor的项目名称',
                name: 'DOCKERHUB_NAMESPACE_NET',
                defaultValue: 'sxm',
        )
        string(
                description: '说明:项目部署使用的用户内网凭证',
                name: 'DOCKERHUB_KEY',
                defaultValue: 'docker-key',
        )
        string(
                description: '说明:项目部署使用的用户公网凭证',
                name: 'DOCKERHUB_KEY_NET',
                defaultValue: 'docker-key-net',
        )
    }


    stages {


      stage ('checkout scm') {
            steps {
                checkout(scm)
            }
        }
        stage("init"){
            //根据分支设置镜像tag
            steps{
                script{
                    String branch_name = "${GIT_BRANCH}"
                    env.IMAGE_TAG = "${PROJECT_VERSION}-"+branch_name.replace('/','.')
                    sh 'echo 当前镜像TAG为:${IMAGE_TAG}'
                }
            }
        }

        stage ('Deploy2K8S:build & push') {
            agent none
            steps {
                container ('nodejs') {
                    //sh 'node -v'
                   //sh 'npm cache verify'
                  // sh 'echo nameserver ns1.qq.com >> /etc/resolv.conf'
                   // sh 'ping http://mirrors.cloud.tencent.com'
                  //  sh 'npm install -g n'
                  //  sh 'n 16.18.1'
                    //sh 'node -v'
//                    sh 'npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver'
                   sh ' npm config set registry=https://registry.npmmirror.com'
                   sh 'npm install cnpm -g'
                   sh 'cnpm i ' // --legacy-peer-deps
                   sh ' npm i'
                   // sh ' yarn install '
                    sh 'npm run build'
                    //sh "ls -al"
                  //  withCredentials([usernamePassword(passwordVariable : 'DOCKER_PASSWORD' ,usernameVariable : 'DOCKER_USERNAME' ,credentialsId : "$DOCKER_CREDENTIAL_ID" ,)]) {
                       // sh 'echo "$DOCKER_PASSWORD" | docker login $REGISTRY -u "$DOCKER_USERNAME" --password-stdin'
                        //sh 'docker build -f Dockerfile -t $REGISTRY/$DOCKERHUB_NAMESPACE/$IMAGE_NAME:$IMAGE_TAG-$BUILD_NUMBER .'
                        //sh 'docker push  $REGISTRY/$DOCKERHUB_NAMESPACE/$IMAGE_NAME:$IMAGE_TAG-$BUILD_NUMBER'
                    //}
                }
            }
        }
        stage('构建镜像') {
          agent none
          steps {
            container('base') {
              withCredentials([usernamePassword(passwordVariable : 'DOCKER_PASSWORD' ,usernameVariable : 'DOCKER_USERNAME' ,credentialsId : "$DOCKER_CREDENTIAL_ID" ,)]) {
                      sh 'echo "$DOCKER_PASSWORD" | docker login $REGISTRY -u "$DOCKER_USERNAME" --password-stdin'
                      sh 'docker build -f Dockerfile -t $REGISTRY/$DOCKERHUB_NAMESPACE/$IMAGE_NAME:$IMAGE_TAG-$BUILD_NUMBER .'
                      sh 'docker push  $REGISTRY/$DOCKERHUB_NAMESPACE/$IMAGE_NAME:$IMAGE_TAG-$BUILD_NUMBER'
                  }
            }

          }
        }
        stage('Deploy:Deploy2dev') {
            when{
                anyOf {
                    equals expected: 'Deploy2dev', actual: DEPLOY_ENVIRONMENT;
                    equals expected: 'DeployALL', actual: DEPLOY_ENVIRONMENT;
                }
            }
            steps{
                container ('base') {
                    withCredentials([
                            kubeconfigFile(
                                    credentialsId: env.KUBECONFIG_CREDENTIAL_IDA,
                                    variable: 'KUBECONFIG')
                    ]) {
                        sh 'envsubst \'${DOCKERHUB_KEY},${APP_NAME},${APP_NAMESPACE},${VOLUME_NAME1},${VOLUME_NAME2},${VOLUME_NAME3},${REGISTRY},${DOCKERHUB_NAMESPACE},${IMAGE_NAME},${IMAGE_TAG},${BUILD_NUMBER},${PORT1}\' < k8s-deploy.yaml | kubectl apply -f -'
                    }
                }
            }
        }
        stage('Deploy:Deploy2Demo') {
            when{
                anyOf {
                    equals expected: 'Deploy2Demo', actual: DEPLOY_ENVIRONMENT;
                    equals expected: 'DeployALL', actual: DEPLOY_ENVIRONMENT;
                }
            }
            steps{
                container ('base') {
                    script {
                        env.DOCKER_CREDENTIAL_ID = env.DOCKER_CREDENTIAL_ID_NET
                        env.REGISTRY = env.REGISTRY
                        env.DOCKERHUB_NAMESPACE = env.DOCKERHUB_NAMESPACE
                        env.DOCKERHUB_KEY = env.DOCKERHUB_KEY
                    }
                    withCredentials([usernamePassword(passwordVariable : 'DOCKER_PASSWORD' ,usernameVariable : 'DOCKER_USERNAME' ,credentialsId : "$DOCKER_CREDENTIAL_ID" ,)]) {
                        sh 'echo "$DOCKER_PASSWORD" | docker login $REGISTRY -u "$DOCKER_USERNAME" --password-stdin'
                        sh 'docker build -f Dockerfile -t $REGISTRY/$DOCKERHUB_NAMESPACE/$IMAGE_NAME:$IMAGE_TAG-$BUILD_NUMBER .'
                        sh 'docker push  $REGISTRY/$DOCKERHUB_NAMESPACE/$IMAGE_NAME:$IMAGE_TAG-$BUILD_NUMBER'
                    }
                    withCredentials([
                            kubeconfigFile(
                                    credentialsId: env.KUBECONFIG_CREDENTIAL_IDC,
                                    variable: 'KUBECONFIG')
                    ]) {
                        sh 'envsubst \'${DOCKERHUB_KEY},${APP_NAME},${APP_NAMESPACE},${VOLUME_NAME1},${VOLUME_NAME2},${VOLUME_NAME3},${REGISTRY},${DOCKERHUB_NAMESPACE},${IMAGE_NAME},${IMAGE_TAG},${BUILD_NUMBER},${PORT1}\' < k8s-deploy.yaml | kubectl apply -f -'
                    }
                }
            }
        }
    }
}

