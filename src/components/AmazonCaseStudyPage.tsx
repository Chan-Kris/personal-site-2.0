import { type Component } from 'solid-js';

interface AmazonCaseStudyPageProps {
  onBackToProjects: () => void;
  onBackToHome: () => void;
  onContact: () => void;
}

export const AmazonCaseStudyPage: Component<AmazonCaseStudyPageProps> = (props) => {
  return (
    <article class="relative z-10 max-w-4xl mx-auto px-6 py-12 sm:py-20 animate-fade-rise">
      {/* Top Breadcrumb & Navigation */}
      <div class="flex flex-wrap items-center justify-between gap-4 mb-12 sm:mb-16 border-b border-white/[0.08] pb-6">
        <div class="flex items-center space-x-3">
          <button
            type="button"
            onClick={props.onBackToProjects}
            class="liquid-glass rounded-full px-4 py-2 text-xs sm:text-sm text-foreground flex items-center space-x-1.5 hover:scale-[1.02] transition-transform cursor-pointer"
          >
            <span>←</span>
            <span>返回实践成果</span>
          </button>
          <button
            type="button"
            onClick={props.onBackToHome}
            class="text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-2 cursor-pointer"
          >
            返回首页
          </button>
        </div>

        <div class="flex items-center space-x-2 text-[11px] font-mono text-muted-foreground/70">
          <span>CASE STUDY</span>
          <span>·</span>
          <span>2026-09-04</span>
          <span>·</span>
          <span>约 8 分钟阅读</span>
        </div>
      </div>

      {/* Article Header */}
      <header class="mb-14 text-left">
        {/* Tags */}
        <div class="flex flex-wrap gap-2 mb-5">
          {['数据工程', '自动化系统', 'AI Agent', 'Amazon 运营', 'Google Sheets API'].map((tag) => (
            <span class="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-foreground/80 border border-white/[0.08]">
              #{tag}
            </span>
          ))}
        </div>

        <h1 class="text-3xl sm:text-5xl lg:text-5.5xl font-normal tracking-tight text-foreground font-display leading-[1.1] mb-6">
          把“每天填表”做成一套 <br class="hidden sm:inline" />
          <em class="not-italic text-muted-foreground">不会悄悄出错的数据系统</em>
        </h1>

        {/* Lead Quote / Abstract */}
        <div class="liquid-glass rounded-2xl p-6 sm:p-8 border-l-4 border-amber-300/80 my-8">
          <p class="text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
            <strong>项目复盘导言：</strong>
            一次亚马逊运营数据自动化项目的深度复盘。真正困难的从来不是写脚本把数字录入表格，而是让流转其中的每个数字都<strong>可验证、可解释、可恢复</strong>。
          </p>
        </div>
      </header>

      {/* Main Body Content */}
      <div class="space-y-12 text-sm sm:text-base text-muted-foreground/90 leading-relaxed font-normal">
        {/* Background */}
        <section class="space-y-4">
          <p>
            最初看，这只是一个很普通的需求：每天打开关键词分析工具，查询一批 Amazon 商品，把类目排名、流量词、自然排名和广告排名抄进 Google Sheets，再写一段当天分析。
          </p>
          <p>
            如果只看动作，它确实很像“自动填表”。但当范围扩展到 <strong class="text-foreground">3 个产品组、18 个商品样本、6 张数据表和 18 份每日报告</strong> 后，我逐渐意识到：这个项目真正要解决的，不是录入速度，而是<strong class="text-foreground underline underline-offset-4 decoration-amber-400/40">如何避免错误在无人察觉时进入历史数据</strong>。
          </p>
          <p>
            一次明显失败的任务通常不可怕。更危险的是任务看起来成功了：页面打开了、接口返回了 200、表格里也出现了数字，但数字来自旧页面，类目和排名不在同一层级，缺失值被写成了 0，或者数据落进了名称相似的另一张表。
          </p>
          <p>
            于是，我把这个项目从一套简单的操作步骤，逐步重构为一条<strong>可验证闭环的数据生产链路</strong>。
          </p>
        </section>

        {/* Section 1 */}
        <section class="space-y-5 pt-4">
          <h2 class="text-2xl sm:text-3xl font-normal text-foreground font-display tracking-wide">
            1. 自动化的对象不是“点击”，而是“可信度”
          </h2>
          <p>这套流程每天处理两类时间尺度的数据：</p>
          <ul class="list-disc pl-5 space-y-2 text-foreground/80">
            <li><strong>五日回滚表</strong>：保存最近五个<em>真实采样日</em>，用于观察短期变动与异常抖动；</li>
            <li><strong>长期积累表</strong>：按日期沉淀类目排名和精确关键词排名，用于观察宏观周期的趋势演进。</li>
          </ul>
          <p>两类表的用途不同，但都严格依赖同一条可信链路：</p>

          {/* Diagram Box */}
          <div class="p-6 rounded-2xl bg-black/40 border border-white/10 font-mono text-xs sm:text-sm text-foreground/90 overflow-x-auto shadow-inner leading-relaxed">
            <span class="text-muted-foreground/60 block mb-2">// 严格防静默污染的数据流转契约</span>
            实时预检<br />
            &nbsp;&nbsp;→ 采集当前页面<br />
            &nbsp;&nbsp;→ <span class="text-amber-300">连续两次完整复读（双读签名校验）</span><br />
            &nbsp;&nbsp;→ 写入前范围与表头审计<br />
            &nbsp;&nbsp;→ 最小范围增量写入<br />
            &nbsp;&nbsp;→ <span class="text-emerald-400">逐格底层类型与值回读</span><br />
            &nbsp;&nbsp;→ 原生页面核验<br />
            &nbsp;&nbsp;→ 留下可交接、可接管的审计记录
          </div>

          <p class="text-xs sm:text-sm text-amber-200/80 bg-amber-400/10 p-4 rounded-xl border border-amber-400/20">
            ⚠️ <strong>契约准则：</strong>在这条链路里，任何一步失败，后续步骤都必须坚决停止。因为盲目“继续跑完”绝不等于“完成”，只会让静默错误扩散污染更大的历史盘。
          </p>
        </section>

        {/* Section 2 */}
        <section class="space-y-5 pt-4">
          <h2 class="text-2xl sm:text-3xl font-normal text-foreground font-display tracking-wide">
            2. 为什么同一份结果要读两遍？
          </h2>
          <p>
            现代 Web 第三方数据页面并不是一个瞬间完成更新的静态接口。商品信息、类目排名和关键词表常常是分批异步加载渲染：顶部已经显示新商品，下面却仍然是上一个商品的关键词；类目出现了，排名还在重新请求；关键词列表加载好了，广告排名又晚了一拍。
          </p>
          <p>
            如果程序只等待某个单一 DOM 元素出现，就极其容易采到一份<strong>“半新半旧”的杂交脏数据</strong>。
          </p>
          <p>我的解法是：为每次抓取生成一份商品数据的<strong>完整快照指纹签名</strong>，包含：</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 font-mono text-xs">
            <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              • 当前商品唯一标识符
            </div>
            <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              • 页面显示的最具体小类目录
            </div>
            <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              • 与该小类同层级的权威 BSR 排名
            </div>
            <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              • 关键词的精确文本、排布次序与权重
            </div>
            <div class="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] sm:col-span-2">
              • 每个关键词对应的流量占比、Natural 排名与 SP 广告排名组合
            </div>
          </div>

          <p>
            <strong>只有连续两次读取到的完整签名完全一致</strong>，这份数据才会进入待写队列。如果两次不同，就继续等待或重新查询，绝不从不同轮次各取一部分拼凑成所谓的“完整结果”。
          </p>
          <p>
            这看起来会让自动化执行多花几秒，却彻底消除了最难发现的一类致命错误：<span class="text-foreground">数据格式完全正确，内容却属于不同刷新时刻</span>。
          </p>
        </section>

        {/* Section 3 */}
        <section class="space-y-5 pt-4">
          <h2 class="text-2xl sm:text-3xl font-normal text-foreground font-display tracking-wide">
            3. 缺失值不是一个技术细节
          </h2>
          <p>
            项目里有一条看似琐碎、实际关乎数据生命线的规则：<strong>缺失排名绝对不能写成数值 0</strong>。
          </p>
          <p>
            因为在数学与统计逻辑中，0 是一个确定存在的数值，它会直接参与排序、平均值和趋势线的计算；而“没有返回”、“没有上榜”与“页面尚未加载完成”表达的是完全不同的业务事实。简单地把它们都填成 0，相当于在数据进入分析之前就制造了虚假结论。
          </p>

          <div class="liquid-glass rounded-2xl p-6 my-4 space-y-3">
            <h4 class="text-sm font-mono text-foreground font-medium uppercase tracking-wider">
              缺失语义三分法架构：
            </h4>
            <div class="space-y-2 text-xs sm:text-sm">
              <p><span class="text-amber-300 font-mono font-bold">1. 真实未上榜：</span> 页面明确返回且无 Natural 或 SP 排名时，记录字符串 <code class="text-foreground px-1.5 py-0.5 rounded bg-white/10">-</code>；</p>
              <p><span class="text-amber-300 font-mono font-bold">2. 结构性空缺：</span> 数据源稳定地只返回部分关键词时，未返回的结构位置严格保持空白（Blank）；</p>
              <p><span class="text-amber-300 font-mono font-bold">3. 异常污染态：</span> 页面仍在加载、类目为空或结果残留旧商品时，整份结果直接判定为无效，立即阻断写入。</p>
            </div>
          </div>

          <p>
            同样的原则也适用于关键词表头维护。长期表只接受<strong>完全精确一致</strong>的关键词表头：不做单复数强行合并，不用近似词替代，也不把“看起来意思一样”的词随意映射到同一列。
          </p>
          <p>
            这样做虽然会产生更多空白单元格，但这些空白是<strong>诚实且可回溯的</strong>。相比一张看起来填得很满、实际混合了猜测的表格，我们更应当捍卫证据链的边界。
          </p>
        </section>

        {/* Section 4 */}
        <section class="space-y-5 pt-4">
          <h2 class="text-2xl sm:text-3xl font-normal text-foreground font-display tracking-wide">
            4. 把 Google Sheets 当作生产数据库对待
          </h2>
          <p>
            在线电子表格最容易让人掉以轻心，因为它看起来可以随时手动修改、复制、粘贴、插行和撤销。但当它承担起沉淀企业连续业务历史的重任时，它就已经是一座<strong>严肃的生产数据库</strong>：有严格 Schema 结构、有数据类型、有约束，更有必须受到保护的历史审计记录。
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div class="liquid-glass rounded-2xl p-5">
              <h4 class="text-sm font-medium text-foreground mb-2 font-mono text-amber-300">
                ① 旧坐标不是事实
              </h4>
              <p class="text-xs text-muted-foreground leading-relaxed">
                随新词加入，列号会整体右推。上一次的列号只能用于辅助，每轮任务必须动态重算表宽、表头、分隔列与目标合并区。
              </p>
            </div>

            <div class="liquid-glass rounded-2xl p-5">
              <h4 class="text-sm font-medium text-foreground mb-2 font-mono text-amber-300">
                ② 只修改最小范围
              </h4>
              <p class="text-xs text-muted-foreground leading-relaxed">
                只修改明确受影响的单元格。严禁 values-only 大面积覆盖整表，杜绝悄悄抹掉公式、样式与数据验证规则。
              </p>
            </div>

            <div class="liquid-glass rounded-2xl p-5">
              <h4 class="text-sm font-medium text-foreground mb-2 font-mono text-amber-300">
                ③ 类型也是数据的一部分
              </h4>
              <p class="text-xs text-muted-foreground leading-relaxed">
                真实排名必须为 Number 数值，缺失标记必须为 String 字符串，日期统一按指定时区生成，回读时校验底层真实存储类型。
              </p>
            </div>

            <div class="liquid-glass rounded-2xl p-5">
              <h4 class="text-sm font-medium text-foreground mb-2 font-mono text-amber-300">
                ④ 接口 200 不等于写入正确
              </h4>
              <p class="text-xs text-muted-foreground leading-relaxed">
                请求成功也可能写错页签或偏离一列。完成的唯一判据，是逐格回读出来的实际值与计划完全咬合。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section class="space-y-5 pt-4">
          <h2 class="text-2xl sm:text-3xl font-normal text-foreground font-display tracking-wide">
            5. 报告不是把数字重新读一遍
          </h2>
          <p>
            在每天全自动产出 18 份分析报告时，我固定了<strong>七个维度的观察框架</strong>：
          </p>
          <div class="flex flex-wrap gap-2 text-xs font-mono">
            <span class="px-3 py-1.5 rounded-lg bg-white/[0.05] text-foreground border border-white/10">1. 市场定位</span>
            <span class="px-3 py-1.5 rounded-lg bg-white/[0.05] text-foreground border border-white/10">2. 产品趋势</span>
            <span class="px-3 py-1.5 rounded-lg bg-white/[0.05] text-foreground border border-white/10">3. 市场大盘趋势</span>
            <span class="px-3 py-1.5 rounded-lg bg-white/[0.05] text-foreground border border-white/10">4. 市场格局结构</span>
            <span class="px-3 py-1.5 rounded-lg bg-white/[0.05] text-foreground border border-white/10">5. 竞争态势判断</span>
            <span class="px-3 py-1.5 rounded-lg bg-white/[0.05] text-foreground border border-white/10">6. 机会与潜在风险</span>
            <span class="px-3 py-1.5 rounded-lg bg-white/[0.05] text-foreground border border-white/10">7. 具体可执行建议</span>
          </div>
          <p>
            固定结构不是为了格式美观，而是为了强制系统对信息进行严格的三层解构：
          </p>
          <ul class="list-disc pl-5 space-y-2 text-foreground/90">
            <li><strong>事实（Fact）</strong>：当前类目 BSR、核心流量词排名份额与 Natural/SP 精确位置；</li>
            <li><strong>比较（Comparison）</strong>：仅在<em>同一具体小类</em>的受观测样本中横向对比相对位次变化；</li>
            <li><strong>行动（Action）</strong>：触发何种量化阈值时执行何种策略调整，以及明确的下一次复盘时间节点。</li>
          </ul>
          <p>
            “分析的可信度，往往不取决于写了多少滔滔不绝的结论，而取决于<strong>清晰诚实地交代了哪些结论在现有证据下暂时不能得出</strong>。”
          </p>
        </section>

        {/* Section 6 */}
        <section class="space-y-5 pt-4">
          <h2 class="text-2xl sm:text-3xl font-normal text-foreground font-display tracking-wide">
            6. 真正有价值的规则，往往来自事故
          </h2>
          <p>这套严密的防护契约不是一开始就能空想出来的，每一条都源自真实的线上博弈与踩坑：</p>
          <ul class="space-y-2 text-xs sm:text-sm">
            <li class="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              • <strong>页签混淆事故</strong> ➔ 写入前强制三级校验：工作簿 ID + 表名 + 页签全局唯一 GID + 范围锁；
            </li>
            <li class="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              • <strong>父子类目混杂事故</strong> ➔ 采集时强制绑定「最具体小类目录 ↔ 同层级 BSR」映射对；
            </li>
            <li class="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              • <strong>动态插列位移事故</strong> ➔ 结构性增列严格从右至左，或每次变更后强制无损重算全局拓扑坐标；
            </li>
            <li class="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              • <strong>截图核验超时事故</strong> ➔ 超时则如实记录异常，退回至底层单元格值与行高元数据审计，绝不伪造“视觉核验通过”。
            </li>
          </ul>

          <div class="p-6 rounded-2xl bg-black/40 border border-white/10 font-mono text-xs sm:text-sm text-foreground/90 my-4">
            <span class="text-muted-foreground/60 block mb-2">// 标准故障自愈与可恢复流程</span>
            检测异常 ➔ 立即停止后续一切写入<br />
            &nbsp;&nbsp;➔ 记录现场快照与受影响最小范围<br />
            &nbsp;&nbsp;➔ 基于写前备份或差量版本恢复影响面<br />
            &nbsp;&nbsp;➔ 逐格自动比较校验直至 mismatch === 0<br />
            &nbsp;&nbsp;➔ 触发降级警报并调整重试策略
          </div>
        </section>

        {/* Section 7 */}
        <section class="space-y-5 pt-4">
          <h2 class="text-2xl sm:text-3xl font-normal text-foreground font-display tracking-wide">
            7. 我从这个项目里学到的三件事
          </h2>
          <div class="space-y-4 my-4">
            <div class="liquid-glass rounded-2xl p-6">
              <h4 class="text-base font-medium text-foreground mb-2 font-display">
                ① 自动化越深入，边界条件越应该显式化
              </h4>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                跑通正常路径很容易，真正决定一个工程系统生命力与可信度的，是对旧页面、部分返回、动态增列、接口失效和中途断电等所有异常路径的显式定义。
              </p>
            </div>

            <div class="liquid-glass rounded-2xl p-6">
              <h4 class="text-base font-medium text-foreground mb-2 font-display">
                ② 数据质量不是最后加的一次检查，而是贯穿全链路的设计
              </h4>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                从采集时的双读校验，到写入前的格式契约，再到落地后的逐格回读核验，每一步的核心目标都是在压缩静默错误的生存空间。
              </p>
            </div>

            <div class="liquid-glass rounded-2xl p-6">
              <h4 class="text-base font-medium text-foreground mb-2 font-display">
                ③ 好的 Agent 不只是会执行，还要会“停下来”
              </h4>
              <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                当类目与层级不匹配、页面状态不稳定或目标范围无法确认时，<strong>敢于坚决停止写入，比想方设法把它填完要有价值得多</strong>。拒绝伪造完整性，本身就是高级的系统工程能力。
              </p>
            </div>
          </div>
        </section>

        {/* Epilogue */}
        <section class="pt-6 border-t border-white/[0.08]">
          <div class="liquid-glass rounded-3xl p-8 sm:p-12 text-center my-6">
            <span class="text-xs font-mono tracking-widest text-muted-foreground uppercase block mb-3">
              EPILOGUE · 结语
            </span>
            <blockquote class="text-xl sm:text-2xl font-normal text-foreground font-display mb-6 leading-relaxed">
              “它依靠的是一些很朴素的原则：来源要稳定、缺失要诚实、写入要克制、结果要回读、错误要可恢复。<br />
              对任何数据自动化项目来说，<span class="text-amber-300">可信，永远比看起来自动更重要。</span>”
            </blockquote>
          </div>
        </section>
      </div>

      {/* Footer Navigation & Contact CTA */}
      <footer class="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="flex items-center space-x-3">
          <button
            type="button"
            onClick={props.onBackToProjects}
            class="liquid-glass rounded-full px-5 py-2.5 text-xs sm:text-sm text-foreground flex items-center space-x-2 hover:scale-[1.02] transition-transform cursor-pointer"
          >
            <span>←</span>
            <span>返回实践成果列表</span>
          </button>
          <button
            type="button"
            onClick={props.onBackToHome}
            class="text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-2 cursor-pointer"
          >
            返回首页顶部
          </button>
        </div>

        <div>
          <button
            type="button"
            onClick={props.onContact}
            class="liquid-glass rounded-full px-6 py-2.5 text-xs sm:text-sm text-foreground hover:scale-[1.03] transition-transform cursor-pointer font-medium"
          >
            与我交流该系统架构 →
          </button>
        </div>
      </footer>
    </article>
  );
};
