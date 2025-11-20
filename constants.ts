
import { SlideType, SlideContent, CharacterData } from './types';

export const CHARACTERS: CharacterData[] = [
  {
    id: 'fibroblast',
    name: '金高源',
    role: '成纤维细胞',
    worldRole: '细胞都市·真皮层 首席结构官',
    title: '稳固结构·抗老核心',
    quote: '年轻不是盲目的逆转，而是修复秩序的勇气。',
    keywords: ['理性', '精准', '克制', '有说服力'],
    bio: '上市金融公司高管，新北京人，行事干练。40+，平时吃轻食，注重生活品质，红酒收藏家。虽然注重身材管理和规律运动，但因工作偶尔熬夜。',
    skinIssues: '皮肤干燥，伴有细纹。',
    skills: '辩论，危机谈判，维系细胞间的信任与重建。',
    products: ['抗老精华', '胜肽', '视黄醇'],
    color: 'bg-blue-700',
    image: '/images/jin_gaoyuan.png'
  },
  {
    id: 'immune',
    name: '穆方钰',
    role: '免疫细胞',
    worldRole: '细胞都市·真皮层 防御情报官',
    title: '敏感修护·情绪价值',
    quote: '免疫是最温柔的自我坚持。',
    keywords: ['高敏感', '洞察力强', '冷静观察者', '容易过载'],
    bio: '美术学院学生，独生女，20+，乌镇Cosplay摊主。经常出没酒吧、演唱会、艺术活动。性格高冷但内心细腻，画廊经纪人助理。',
    skinIssues: '高瘦肤白但偶尔气虚，容易感冒、爆痘。',
    skills: '设计，鉴赏力。擅长在高感知与高混乱中保持判断力。',
    products: ['舒缓保湿', '泛红修护', '益生菌类'],
    color: 'bg-emerald-600',
    image: '/images/mu_fangyu.png'
  },
  {
    id: 'stem',
    name: '水晶晶',
    role: '干细胞',
    worldRole: '细胞都市·基底层 再生与更新局总监',
    title: '老化修复·再生',
    quote: '我不急着重生，我只是慢慢让破碎的地方重新呼吸。',
    keywords: ['温柔', '洞察', '从容', '包容', '疗愈'],
    bio: '自称茶楼主理人，热衷东方美学，55+。定居东南亚，喜欢素食、瑜伽、冥想。植物学家，前人类学编辑。生活节奏慢，自然主义打扮。',
    skinIssues: '面部斑点，皮肤胶原流失，微微下垂。',
    skills: '洞察，感知力。掌管修复与重启的秩序。',
    products: ['抗老霜', '焕活面膜'],
    color: 'bg-teal-700',
    image: '/images/shui_jingjing.png'
  },
  {
    id: 'supernatant',
    name: '尚清',
    role: '细胞上清液',
    worldRole: '细胞都市·循环层 流体与信号传导中心主任',
    title: '能量流动·代谢',
    quote: '静止才是衰败的开始。',
    keywords: ['清醒', '克制', '理性', '柔韧', '内敛'],
    bio: '互联网人，兼职道家弟子，35+。日常练功，但也喜欢摆枪弄剑、参加电竞游戏。建筑工艺员出身，注重系统平衡。',
    skinIssues: '偶尔疲态，手搓保湿。出汗多，有运动损伤。',
    skills: '渲染，演绎力。掌控能量与信息的流向。',
    products: ['上清液', '涂抹式精华'],
    color: 'bg-cyan-600',
    image: '/images/shang_qing.png'
  },
  {
    id: 'tank',
    name: '关叔',
    role: '液氮罐',
    worldRole: '细胞都市·记忆层 低温监测与储存局局长',
    title: '长期稳定·数据监控',
    quote: '我不怕数据异常，我怕没人看见异常。',
    keywords: ['冷静', '自律', '可靠', '敏锐', '孤独'],
    bio: '60+，守卫大爷，实时响应，上报数据信息。情报专家，样本全掌握。平时练气功，操场运动健将。维护社区安全，严防不明物种侵扰。',
    skinIssues: '老化迹象，需要强效抗氧化与维稳。',
    skills: '监测，守护力，另有隐藏技能。是维持系统安全与记忆完整的最后防线。',
    products: ['防老化', '夜间精华', '抗氧化'],
    color: 'bg-indigo-800',
    image: '/images/guan_shu.png'
  }
];

export const SLIDES: SlideContent[] = [
  {
    id: 0,
    type: SlideType.COVER,
    title: '《细胞都市》',
    subtitle: 'Character-Driven Skincare Brand Strategy',
    data: {
      author: '策划团队',
      date: new Date().toLocaleDateString()
    }
  },
  {
    id: 1,
    type: SlideType.TOC,
    title: '目录',
    content: [
      '传播背景与市场洞察',
      '目标受众与人群画像',
      '创意核心：细胞都市世界观',
      '角色体系：金高源 (成纤维细胞)',
      '角色体系：穆方钰 (免疫细胞)',
      '角色体系：水晶晶 (干细胞)',
      '角色体系：尚清 (细胞上清液)',
      '角色体系：关叔 (液氮罐)',
      '渠道与媒体矩阵规划',
      'KPI & 效果评估',
      'Demo 视频脚本规划'
    ]
  },
  {
    id: 2,
    type: SlideType.TEXT_LIST,
    title: '1. 传播背景与市场洞察',
    subtitle: 'Market Landscape & Opportunity',
    data: {
      sections: [
        {
          title: '市场痛点 (Pain Points)',
          points: [
            '护肤品类严重同质化，"成分党" 卷参数导致用户疲劳',
            '科学原理晦涩难懂，消费者难以建立深度记忆',
            '传统广告缺乏情感连接，难以打动 Z 世代与 Alpha 世代'
          ]
        },
        {
          title: '消费趋势 (Trends)',
          points: [
            '情绪价值消费：用户不仅买功效，更买"懂我"的品牌人设',
            '内容可视化：拟人化叙事、条漫、AIGC 视频成为流量密码',
            '自我投射：消费者渴望在品牌故事中看到自己的生活缩影'
          ]
        },
        {
          title: '核心策略 (Strategy)',
          highlight: '将枯燥的生物学成分，转化为一座"细胞都市"的职场故事。每一个成分，都是你身体里的一位守护者。'
        }
      ]
    }
  },
  {
    id: 3,
    type: SlideType.GRID_CARDS,
    title: '2. 目标受众分析',
    subtitle: 'Target Audience Personas',
    data: [
      { 
        title: '高知都市女性', 
        desc: '40+ | 追求理性、高效。对应 [成纤维细胞]。痛点：抗老、维持轮廓。', 
        icon: 'Briefcase',
        details: '偏好深度科普与极简美学。'
      },
      { 
        title: '高敏艺术青年', 
        desc: '20+ | 追求情绪共鸣、个性。对应 [免疫细胞]。痛点：敏感肌、屏障受损。', 
        icon: 'Palette',
        details: '易被二次元、拟人化IP吸引。'
      },
      { 
        title: '身心修行者', 
        desc: '55+ | 追求自然、治愈。对应 [干细胞]。痛点：全面再生、抗衰。', 
        icon: 'Sprout',
        details: '关注身心平衡与东方哲学。'
      },
      { 
        title: '成分极客/极简男', 
        desc: '30+ | 追求数据、逻辑。对应 [上清液/液氮罐]。痛点：控油、维稳。', 
        icon: 'Activity',
        details: '信赖硬核数据与科技背书。'
      }
    ]
  },
  {
    id: 4,
    type: SlideType.TEXT_LIST,
    title: '3. 创意核心：细胞都市',
    subtitle: 'The World View: Cellular City',
    data: {
      sections: [
        {
          title: '世界观设定',
          points: [
            '人体皮肤被重构为一座赛博朋克风格的【细胞都市】',
            '每一次肌肤问题（炎症、细纹、暗沉）都是一场城市危机',
            '每一次护肤行为，都是给城市管理者（细胞角色）输送补给'
          ]
        },
        {
          title: '区域划分',
          points: [
            '【真皮层】中央商务区：由首席结构官金高源坐镇，维持城市天际线（轮廓）',
            '【基底层】再生花园：水晶晶负责的生命孕育之地，节奏缓慢而充满生机',
            '【循环层】物流网络：尚清管理的能量管道，确保信息与物资的流动',
            '【记忆层】冷冻档案馆：关叔守护的核心数据中心，记录着城市的历史'
          ]
        }
      ],
      imagePlaceholder: 'map'
    }
  },
  {
    id: 5,
    type: SlideType.CHARACTER,
    title: '4.1 角色：金高源',
    data: CHARACTERS[0]
  },
  {
    id: 6,
    type: SlideType.CHARACTER,
    title: '4.2 角色：穆方钰',
    data: CHARACTERS[1]
  },
  {
    id: 7,
    type: SlideType.CHARACTER,
    title: '4.3 角色：水晶晶',
    data: CHARACTERS[2]
  },
  {
    id: 8,
    type: SlideType.CHARACTER,
    title: '4.4 角色：尚清',
    data: CHARACTERS[3]
  },
  {
    id: 9,
    type: SlideType.CHARACTER,
    title: '4.5 角色：关叔',
    data: CHARACTERS[4]
  },
  {
    id: 10,
    type: SlideType.GRID_CARDS,
    title: '5. 渠道与媒体矩阵',
    subtitle: 'Go-to-Market Strategy',
    data: [
      { title: '抖音短剧', desc: '发布《细胞都市》系列单元剧，演绎"熬夜"、"敏感"等危机剧情。', icon: 'Video', details: '以夸张的韩漫风格制作视频。' },
      { title: '小红书图文', desc: '发布角色OOTD、办公桌EDC，进行软性种草。', icon: 'Smartphone', details: '打造"金高源的抗老清单"。' },
      { title: 'B站深度番', desc: '联合科普UP主，用世界观设定以此解析护肤原理。', icon: 'Layers', details: '硬核成分党的聚集地。' },
      { title: '线下快闪展', desc: '搭建"细胞都市"实景，设置"液氮冷冻室"等打卡点。', icon: 'MapPin', details: '沉浸式体验品牌世界观。' }
    ]
  },
  {
    id: 11,
    type: SlideType.TEXT_LIST,
    title: '6. KPI & 效果评估',
    subtitle: 'Success Metrics',
    data: {
      sections: [
        {
          title: '声量指标 (Awareness)',
          points: ['全网视频播放量 > 500万', '微博话题 #细胞都市# 阅读量 > 2000万', '角色表情包下载量 > 5万次']
        },
        {
          title: '品牌资产 (Brand Equity)',
          points: ['品牌人设喜爱度提升 30%', '成分科学认知度提升 45%', 'Z世代用户占比提升 20%']
        },
        {
          title: '转化效果 (Conversion)',
          points: ['天猫/抖音小店搜索量激增', '角色联名礼盒售罄率 95%', '私域社群活跃度提升']
        }
      ]
    }
  },
  {
    id: 12,
    type: SlideType.TIMELINE,
    title: '7. Demo 视频脚本',
    subtitle: '1-3 Minute Concept Film',
    data: [
      { time: '00:00 - 00:15', title: '序幕：夜之城', desc: '镜头俯瞰细胞都市（皮肤），霓虹闪烁但局部由于"熬夜"开始出现停电（暗沉）。' },
      { time: '00:15 - 00:45', title: '危机：入侵者', desc: '紫外线轰炸机来袭，穆方钰（免疫细胞）在防御塔紧急调度，但防线告急。' },
      { time: '00:45 - 01:15', title: '集结：唤醒', desc: '金高源（成纤维）在指挥室按下按钮，尚清（上清液）启动能量流，城市灯光逐一亮起。' },
      { time: '01:15 - 01:45', title: '修复：重塑', desc: '水晶晶（干细胞）在花园中抚摸枯萎植物，瞬间绿意盎然。关叔（液氮）冻结了破坏源。' },
      { time: '01:45 - 02:00', title: '尾声：新生', desc: '一位女性在镜子前醒来，皮肤光泽透亮。Slogan: "你的身体，是一座不夜城。"' }
    ]
  },
  {
    id: 13,
    type: SlideType.SUMMARY,
    title: '8. 项目总结',
    data: {
      points: [
        '差异化：用"都市职场"隐喻"细胞功能"，降低认知门槛',
        'IP化：五大角色覆盖全年龄段与肤质人群，实现精准圈层营销',
        '延展性：世界观可无限扩展（如引入"细菌反派"、"外来游客"）',
        '视觉冲击：复古韩漫风格在护肤品宣发中独树一帜，极具记忆点'
      ]
    }
  }
];
