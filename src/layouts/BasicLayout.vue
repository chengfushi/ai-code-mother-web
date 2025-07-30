<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>

      <a-layout-content class="content"><router-view /></a-layout-content>
      <a-layout-footer class="footer">
        <div class="footer-container">
          <div class="footer-section">
            <h4>AI应用生成</h4>
            <p>专业的AI应用生成平台，为您提供智能化的解决方案。</p>
            <div class="social-links">
              <!-- 将原生SVG图标替换为Ant Design Vue图标组件 -->
              <a href="https://github.com/chengfushi" target="_blank">
                <GithubOutlined />
              </a>
              <a href="https://chengfushi.blog.csdn.net/" target="_blank">
                <BookOutlined />
              </a>
            </div>
          </div>
          <div class="footer-section">
            <h4>联系方式</h4>
            <p><a href="mailto:303623518@qq.com">303623518@qq.com</a></p>
            <p>武汉市中南民族大学</p>
          </div>
          <div class="footer-section">
            <h4>贡献者</h4>
            <p><a href="https://github.com/chengfushi" target="_blank">Chengfu</a></p>
            <p><a href="https://github.com/camellialoveit" target="_blank">Yike</a></p>
          </div>
        </div>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
import { GithubOutlined, BookOutlined } from '@ant-design/icons-vue'
</script>
<style scoped>
#basicLayout .footer {
  background: #ffffff;
  padding: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

.footer-container {
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  color: #333;
}

.footer-section {
  flex: 1;
  padding: 0 20px;
  background: #ffffff;
}

.footer-section h4 {
  color: #333;
  margin-bottom: 12px;
  font-size: 18px;
}

.footer-section p {
  color: #666;
  margin-bottom: 8px;
  font-size: 14px;
}

.footer-section a {
  color: #666;
  text-decoration: none;
}

.footer-section a:hover {
  color: #000;
  text-decoration: underline;
}

.social-links a {
  margin: 0 8px;
  color: #333;
}

.social-links a:hover {
  color: #000;
}

.content {
  background: linear-gradient(to right, #fefefe, #fff);
  margin-bottom: 28px;
  padding: 20px;
}
.header {
  padding-inline: 20px;
  margin-bottom: 16px;
  color: unset;
  background: white;
}
</style>
