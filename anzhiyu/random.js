var posts=["2023/12/22/23-24赛季大事件/","2023/11/17/SDG进展/","2023/11/07/LT-第三章/","2023/11/07/LT-第二章/","2023/12/25/SDG性别平等/","2023/11/17/书画山·荒野求生/","2023/11/07/LT-第一章/","2023/12/26/狼人杀-x-沟通优化/","2023/11/02/万圣节配音活动/","2023/09/15/欢迎来到阿兹卡班/","2023/09/23/理实班圆明园半日游/","2023/11/10/风逸文学奖获奖通讯/","2023/09/21/理实新闻联播-9-21/","2023/11/24/创意写作/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };