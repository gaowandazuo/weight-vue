<template>
  <div id="scrolling-form-con" class="scrolling-form-con">
    <g-banner :des="'分组展示'" :title="'典型表单'" />
    <div class="scrollable-page">
      <div class="g-box">
        <el-form
          ref="form"
          class="form-con"
          label-width="120px"
          :model="mission"
          :rules="formRules"
        >
          <div class="g-form-block">
            <div class="g-form-title">任务基本信息</div>
            <div class="g-form-block-grid">
              <el-form-item label="是否现场支持" prop="isSupport">
                <el-radio v-model="mission.isSupport" label="0">是</el-radio>
                <el-radio v-model="mission.isSupport" label="1">否</el-radio>
              </el-form-item>
              <el-form-item label="支持地点" prop="position">
                <el-cascader
                  v-model="mission.position"
                  class="g-input-block"
                  :options="regionOptions"
                  placeholder="请选择支持地点"
                />
              </el-form-item>
              <el-form-item label="支持部门" prop="department">
                <el-select
                  v-model="mission.department"
                  class="g-input-block"
                  placeholder="请选择支持部门"
                >
                  <el-option label="应用平台支持部" value="0" />
                  <el-option label="空间大数据事业本部" value="1" />
                </el-select>
              </el-form-item>
              <el-form-item label="任务申请人" prop="applier">
                <el-input
                  v-model="mission.applier"
                  class="g-input-block"
                  placeholder="请输入任务申请人"
                />
              </el-form-item>
            </div>
            <div class="g-form-block-grid">
              <el-form-item label="任务性质" prop="type">
                <el-radio v-model="mission.type" label="0">
                  本地BUG修改
                </el-radio>
                <el-radio v-model="mission.type" label="1">其他</el-radio>
                <el-radio v-model="mission.type" label="2">研发</el-radio>
                <el-radio v-model="mission.type" label="3">支持</el-radio>
              </el-form-item>
              <el-form-item label="支持项目名称" prop="projectName">
                <el-select
                  v-model="mission.projectName"
                  class="g-input-block"
                  filterable
                  placeholder="请输入关键词"
                  remote
                  :remote-method="handleSearchOption"
                  reserve-keyword
                >
                  <el-option
                    v-for="item in projectData"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="支持行业线" prop="line">
                <el-input
                  v-model="mission.line"
                  class="g-input-block"
                  placeholder="请输入支持行业线"
                />
              </el-form-item>
              <el-form-item label="批准人" prop="authorizor">
                <el-input
                  v-model="mission.authorizor"
                  class="g-input-block"
                  placeholder="请输入批准人"
                />
              </el-form-item>
            </div>
          </div>
          <div class="g-form-block">
            <div class="g-form-title">任务工作量</div>
            <div class="g-form-block-grid">
              <el-form-item label="任务开始时间" prop="start">
                <el-date-picker
                  v-model="mission.start"
                  class="g-input-block"
                  placeholder="请输入任务开始时间"
                />
              </el-form-item>
              <el-form-item label="计划工作量" prop="workload">
                <el-input-number
                  v-model="mission.workload"
                  placeholder="请输入计划工作量"
                />
                &nbsp;
                <span>天</span>
                <p class="g-form-des">计划完成此任务的工作量</p>
              </el-form-item>
              <el-form-item label="加班工作量" prop="extraWork">
                <el-input-number
                  v-model="mission.extraWork"
                  placeholder="请输入加班工作量"
                />
                &nbsp;
                <span>天</span>
                <p class="g-form-des">
                  如无请填0，加班时间包含以下三种情况1.工作日8小时之外的 2.周末
                </p>
              </el-form-item>
            </div>
            <div class="g-form-block-grid">
              <el-form-item label="任务结束时间" prop="end">
                <el-date-picker
                  v-model="mission.end"
                  class="g-input-block"
                  placeholder="请输入任务结束时间"
                />
              </el-form-item>
              <el-form-item label="正常工作量" prop="normalWork">
                <el-input-number
                  v-model="mission.normalWork"
                  placeholder="请输入正常工作量"
                />
                &nbsp;
                <span>天</span>
                <p class="g-form-des">完成此任务的工作量，不包含加班时间</p>
              </el-form-item>
            </div>
          </div>
          <div class="g-form-block">
            <div class="g-form-title">任务基本信息</div>
            <div class="g-form-block-grid">
              <el-form-item label="是否现场支持" prop="isSupport">
                <el-radio v-model="mission.isSupport" label="0">是</el-radio>
                <el-radio v-model="mission.isSupport" label="1">否</el-radio>
              </el-form-item>
              <el-form-item label="支持地点" prop="position">
                <el-cascader
                  v-model="mission.position"
                  class="g-input-block"
                  :options="regionOptions"
                  placeholder="请选择支持地点"
                />
              </el-form-item>
              <el-form-item label="支持部门" prop="department">
                <el-select
                  v-model="mission.department"
                  class="g-input-block"
                  placeholder="请选择支持部门"
                >
                  <el-option label="应用平台支持部" value="0" />
                  <el-option label="空间大数据事业本部" value="1" />
                </el-select>
              </el-form-item>
              <el-form-item label="任务申请人" prop="applier">
                <el-input
                  v-model="mission.applier"
                  class="g-input-block"
                  placeholder="请输入任务申请人"
                />
              </el-form-item>
            </div>
            <div class="g-form-block-grid">
              <el-form-item label="任务性质" prop="type">
                <el-radio v-model="mission.type" label="0">
                  本地BUG修改
                </el-radio>
                <el-radio v-model="mission.type" label="1">其他</el-radio>
                <el-radio v-model="mission.type" label="2">研发</el-radio>
                <el-radio v-model="mission.type" label="3">支持</el-radio>
              </el-form-item>
              <el-form-item label="支持项目名称" prop="projectName">
                <el-select
                  v-model="mission.projectName"
                  class="g-input-block"
                  filterable
                  placeholder="请输入关键词"
                  remote
                  :remote-method="handleSearchOption"
                  reserve-keyword
                >
                  <el-option
                    v-for="item in projectData"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="支持行业线" prop="line">
                <el-input
                  v-model="mission.line"
                  class="g-input-block"
                  placeholder="请输入支持行业线"
                />
              </el-form-item>
              <el-form-item label="批准人" prop="authorizor">
                <el-input
                  v-model="mission.authorizor"
                  class="g-input-block"
                  placeholder="请输入批准人"
                />
              </el-form-item>
            </div>
          </div>
          <div class="g-form-block">
            <div class="g-form-title">任务工作量</div>
            <div class="g-form-block-grid">
              <el-form-item label="任务开始时间" prop="start">
                <el-date-picker
                  v-model="mission.start"
                  class="g-input-block"
                  placeholder="请输入任务开始时间"
                />
              </el-form-item>
              <el-form-item label="计划工作量" prop="workload">
                <el-input-number
                  v-model="mission.workload"
                  placeholder="请输入计划工作量"
                />
                &nbsp;
                <span>天</span>
                <p class="g-form-des">计划完成此任务的工作量</p>
              </el-form-item>
              <el-form-item label="加班工作量" prop="extraWork">
                <el-input-number
                  v-model="mission.extraWork"
                  placeholder="请输入加班工作量"
                />
                &nbsp;
                <span>天</span>
                <p class="g-form-des">
                  如无请填0，加班时间包含以下三种情况1.工作日8小时之外的 2.周末
                </p>
              </el-form-item>
            </div>
            <div class="g-form-block-grid">
              <el-form-item label="任务结束时间" prop="end">
                <el-date-picker
                  v-model="mission.end"
                  class="g-input-block"
                  placeholder="请输入任务结束时间"
                />
              </el-form-item>
              <el-form-item label="正常工作量" prop="normalWork">
                <el-input-number
                  v-model="mission.normalWork"
                  placeholder="请输入正常工作量"
                />
                &nbsp;
                <span>天</span>
                <p class="g-form-des">完成此任务的工作量，不包含加班时间</p>
              </el-form-item>
            </div>
          </div>
          <div class="g-form-block">
            <div class="g-form-title">任务详情</div>
            <div class="g-form-block-grid">
              <el-form-item label="任务描述" prop="des">
                <el-input
                  v-model="mission.des"
                  class="g-input-block"
                  placeholder="请输入任务描述"
                  :rows="5"
                  type="textarea"
                />
              </el-form-item>
            </div>
            <div class="g-form-block-grid">
              <el-form-item label="备注" prop="remark">
                <el-input
                  v-model="mission.remark"
                  class="g-input-block"
                  placeholder="请输入备注"
                  :rows="5"
                  type="textarea"
                />
              </el-form-item>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        mission: {
          isSupport: '0',
          position: [],
          department: null,
          applier: '',
          type: '0',
          projectName: '',
          line: '',
          authorizor: '',

          start: '',
          workload: 0,
          extraWork: 0,
          end: '',
          normalWork: 0,

          des: '',
          remark: '',
        },
        regionOptions: [
          {
            label: '中国',
            value: '中国',
            children: [
              {
                label: '山东',
                value: '山东',
                children: [
                  {
                    label: '济南',
                    value: '济南',
                  },
                  {
                    label: '淄博',
                    value: '淄博',
                  },
                ],
              },
              {
                label: '浙江',
                value: '浙江',
                children: [
                  {
                    label: '杭州',
                    value: '杭州',
                  },
                  {
                    label: '温州',
                    value: '温州',
                  },
                ],
              },
            ],
          },
        ],
        projectData: [],
        formRules: {
          isSupport: [
            { required: true, message: '请输入是否现场支持', trigger: 'blur' },
          ],
          department: [
            { required: true, message: '请输入选择支持部门', trigger: 'blur' },
          ],
          applier: [
            { required: true, message: '请输入任务申请人', trigger: 'blur' },
          ],
          type: [
            { required: true, message: '请输入任务性质', trigger: 'blur' },
          ],
          projectName: [
            { required: true, message: '请输入支持项目名称', trigger: 'blur' },
          ],
          line: [
            { required: true, message: '请输入支持行业线', trigger: 'blur' },
          ],
          authorizor: [
            { required: true, message: '请输入批准人', trigger: 'blur' },
          ],
          start: [
            { required: true, message: '请输入任务开始时间', trigger: 'blur' },
          ],
          workload: [
            { required: true, message: '请输入计划工作量', trigger: 'blur' },
          ],
          extraWork: [
            { required: true, message: '请输入加班工作量', trigger: 'blur' },
          ],
          end: [
            { required: true, message: '请输入任务结束时间', trigger: 'blur' },
          ],
          normalWork: [
            { required: true, message: '请输入正常工作时间', trigger: 'blur' },
          ],
        },
      }
    },
    methods: {
      handleSearchOption(query) {
        if (query == '') {
          this.projectData = []
        } else {
          const aaa = [
            { name: '应用中台内部项目', id: 0 },
            { name: 'GRP应用中台', id: 1 },
            { name: '组件库', id: 2 },
            { name: '微服务平台', id: 3 },
          ]
          this.projectData = aaa.filter((item) => {
            return item.name.indexOf(query) > -1
          })
        }
      },
    },
  }
</script>
