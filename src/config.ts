interface IConfig {
  me: {
    name: string;
    job: string;
    started: string;
    stack: string;
    hobby: string;
  };
  socials: {
    [name: string]: string;
  };
  projects: {
    [name: string]: {
      url: string;
      tags: string[];
    };
  };
  og: {
    image: string;
  };
}

export const config: IConfig = {
  me: {
    name: "John Doe",
    job: "backend engineer",
    started: "1970-01-01",
    stack: "Scratch",
    hobby: "gamble my life savings",
  },
  socials: {
    twitter: "https://twitter.com/JohnDoe",
    github: "https://github.com/JohnDoe",
  },
  projects: {
    "996.ICU": {
      url: "https://github.com/996icu/996.ICU",
      tags: ["ccp", "chinese", "overwork", "labor", "996"],
    },
    Linux: {
      url: "https://github.com/torvalds/linux",
      tags: ["c", "kernel", "unix", "os"],
    },
  },
  og: {
    image: "./public/icon.png",
  },
};