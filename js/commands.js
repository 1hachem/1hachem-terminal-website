var linkedin = "https://www.linkedin.com/in/hachem-betrouni/";
var upwork = "https://www.upwork.com/freelancers/~01b79e4e53cd1ca324";
var github = "https://github.com/1hachem/";
var email = "mailto:hachem.betrouni@g.enp.edu.dz";
var cv = "documents/cv.pdf";

social = [
  "<br>",
  'linkedin      <a href="' + linkedin + '" target="_blank">in/hachem-betrouni' + '</a>',
  "<br>",
  'github        <a href="' + github + '" target="_blank">github/1hachemt' + "</a>",
  "<br>",
  'upwrok        <a href="' + upwork + '" target="_blank">upwork/Hachem Betrouni' + "</a>",
  "<br>"
];

secret = [
  "<br>",
  '<span class="command">sudo</span>           Only use if you\'re admin',
  "<br>"
];

projects = [
  "<br>",
  "Still curating... most projects are offline, on GitHub, or confidential.",
  "<br>"
];

help = [
  "<br>",
  '<span class="command">about</span>          Who am I ?',
  '<span class="command">cv</span>             Curriculum vitae',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">projects</span>       View my projects',
  '<span class="command">blogs</span>          Read my blogs',
  '<span class="command">help</span>           You know what this does',
  '<span class="command">email</span>          Email me',
  '<span class="command">clear</span>          Clear terminal',
  "<br>",
];

const deviceTypeAbout = () => {
  const ua = navigator.userAgent;
  
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    about = [
      "<br>",
      "Hi there 👋",
      "my name is Hachem Betrouni,", "I am a Data Science and AI student from Algeria ✨","<br>",
      "🔭 I’m currently working at <a href=\"https://www.instadeep.com/\">InstaDeep</a>","on predicting and generating","new variants of Sars-CoV-2 using GANs","<br>",
      "🌱 looking forward to joining <a href=\"https://www.deepmind.com/\">DeepMind</a>","as an AI research intern in the near future","<br>",
      "🤓 I freelance on <a href=\"https://www.upwork.com/freelancers/~01b79e4e53cd1ca324\">Upwork</a>","in machine learning and data science","<br>", 
      "📫 Reach me at: hachem.betrouni@g.enp.edu.dz","<br>",
      "🤫 Fun fact about me : I never owned a smartphone 📱",
      "<br>"
    ];

  }else{
  
    about = [
      "<br>",
      "Hi there 👋",
      "my name is Hachem Betrouni, I am a Data Science and AI student from Algeria ✨",
      "🔭 I’m currently working at <a href=\"https://www.instadeep.com/\">InstaDeep</a> on predicting and generating new variants of Sars-CoV-2 using GANs", 
      "🌱 looking forward to joining <a href=\"https://www.deepmind.com/\">DeepMind</a> as an AI research intern in the near future",
      "🤓 I freelance on <a href=\"https://www.upwork.com/freelancers/~01b79e4e53cd1ca324\">Upwork</a> in machine learning and data science", 
      "📫 Reach me at: hachem.betrouni@g.enp.edu.dz",
      "🤫 Fun fact about me : I never owned a smartphone 📱",
      "<br>"
    ];
  }
  return about;
};


banner =[
  "loading portfolio ...",
  "installing cv ...",
  "other dependencies ...",
  "--------------",
  "done !",
  "<br>",
  '<span class="color2">Welcome to my interactive web terminal.</span>',
  "For a list of available commands, type <span class=\"command\">help</span>",
  "<br>"
];

about = deviceTypeAbout();

