function generateComponentActions({ pages = false }) {
  const rootUrl = pages ? "pages" : "components";

  return [
    {
      type: "add",
      path: `../src/${rootUrl}/{{kebabCase name}}/{{kebabCase name}}.tsx`,
      templateFile: "component/component.tsx.hbs"
    },
    {
      type: "add",
      path: `../src/${rootUrl}/{{kebabCase name}}/{{kebabCase name}}.test.js`,
      templateFile: "component/component.test.js.hbs"
    },
    {
      type: "add",
      path: `../src/${rootUrl}/{{kebabCase name}}/{{kebabCase name}}.module.scss`,
      templateFile: "component/component.module.scss.hbs"
    },
    {
      type: "add",
      path: `../src/${rootUrl}/{{kebabCase name}}/{{kebabCase name}}.module.scss.d.ts`,
      templateFile: "component/component.module.scss.d.ts.hbs"
    },
    {
      type: "add",
      path: `../src/${rootUrl}/{{kebabCase name}}/index.js`,
      templateFile: "component/index.js.hbs"
    },
    {
      type: "add",
      path: `../src/${rootUrl}/index.js`,
      templateFile: "injectable-index.js.hbs",
      skipIfExists: true
    },
    {
      type: "append",
      path: `../src/${rootUrl}/index.js`,
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import {{pascalCase name}} from "./{{kebabCase name}}";`
    },
    {
      type: "append",
      path: `../src/${rootUrl}/index.js`,
      pattern: `/* PLOP_INJECT_EXPORT */`,
      template: `\t{{pascalCase name}},`
    }
  ];
}

function componentGenerator(plop) {
  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?"
      }
    ],
    actions: generateComponentActions({ pages: false })
  });
}

function pageGenerator(plop) {
  plop.setGenerator("page", {
    description: "Create a page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../pages/{{snakeCase name}}.tsx",
        templateFile: "page/page.tsx.hbs"
      },
      ...generateComponentActions({ pages: true })
    ]
  });
}

function serviceGenerator(plop) {
  plop.setGenerator("service", {
    description: "Create service",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your service name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/services/{{kebabCase name}}/{{kebabCase name}}.ts",
        templateFile: "service/service.ts.hbs"
      },
      {
        type: "add",
        path: "../src/services/{{kebabCase name}}/{{kebabCase name}}.test.js",
        templateFile: "service/service.test.js.hbs"
      },
      {
        type: "add",
        path: "../src/services/{{kebabCase name}}/index.js",
        templateFile: "injectable-index.js.hbs",
        skipIfExists: true
      },
      {
        type: "append",
        path: "../src/services/{{kebabCase name}}/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: 'import {{pascalCase name}} from "./{{kebabCase name}}";'
      },
      {
        type: "append",
        path: "../src/services/{{kebabCase name}}/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`
      },
      {
        type: "add",
        path: "../src/services/index.js",
        templateFile: "injectable-index.js.hbs",
        skipIfExists: true
      },
      {
        type: "append",
        path: "../src/services/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: 'import {{pascalCase name}} from "./{{pascalCase name}}";'
      },
      {
        type: "append",
        path: "../src/services/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`
      }
    ]
  });
}

function hookGenerator(plop) {
  plop.setGenerator("hook", {
    description: "Create a custom react hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your hook name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "../src/hooks/{{kebabCase name}}/{{kebabCase name}}.ts",
        templateFile: "hook/hook.ts.hbs"
      },
      {
        type: "add",
        path: "../src/hooks/{{kebabCase name}}/{{kebabCase name}}.test.js",
        templateFile: "hook/hook.test.js.hbs"
      },
      {
        type: "add",
        path: "../src/hooks/{{kebabCase name}}/index.js",
        templateFile: "injectable-index.js.hbs",
        skipIfExists: true
      },
      {
        type: "append",
        path: "../src/hooks/{{kebabCase name}}/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{kebabCase name}} from "./{{kebabCase name}}";`
      },
      {
        type: "append",
        path: "../src/hooks/{{kebabCase name}}/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{kebabCase name}},`
      },
      {
        type: "add",
        path: "../src/hooks/index.js",
        templateFile: "injectable-index.js.hbs",
        skipIfExists: true
      },
      {
        type: "append",
        path: "../src/hooks/index.js",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: 'import {{kebabCase name}} from "./{{kebabCase name}}";'
      },
      {
        type: "append",
        path: "../src/hooks/index.js",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: "\t{{kebabCase name}},"
      }
    ]
  });
}

module.exports = plop => {
  componentGenerator(plop);
  pageGenerator(plop);
  serviceGenerator(plop);
  hookGenerator(plop);
};
