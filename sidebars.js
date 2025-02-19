/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // Collapsed Version
  // someSidebar: {
  //   "Getting Started": ["home", "install", "faq"],
  //   "How To": ["how-to/create-table"],
  // },

  someSidebar: [
    "introduction",
    {
      type: "category",
      label: "Setup guides",
      collapsed: true,
      items: [
        "setup/install",
        "setup/firebase-project",
        "setup/roles",
        "setup/update",
      ],
    },
    {
      type: "category",
      label: "How-to guides",
      link: { type: "generated-index" },
      collapsed: true,
      items: [
        "how-to/create-table",
        "how-to/create-column",
        "how-to/add-row",
        "how-to/default-values",
        "how-to/custom-views",
      ],
    },
    {
      type: "category",
      label: "Field types",
      link: { type: "generated-index" },
      collapsed: true,
      items: [
        "field-types/supported-fields",
        "field-types/derivative",
        "field-types/connect-table",
        "field-types/connect-service",
        "field-types/action",
        "field-types/add",
      ],
    },
    "rowy-run/overview",
    // {
    //   type: "category",
    //   label: "Rowy Run",
    //   collapsed: true,
    //   items: ["rowy-run/overview"],
    // },
    {
      type: "category",
      label: "Extensions",
      link: { type: "generated-index" },
      collapsed: true,
      items: [
        "extensions/overview",
        "extensions/algolia-index",
        "extensions/sendgrid-email",
        "extensions/twilio-message",
        "extensions/slack-message",
        "extensions/doc-sync",
      ],
    },
    {
      type: "category",
      label: "Webhooks",
      link: { type: "generated-index" },
      collapsed: true,
      items: ["webhooks/overview", "webhooks/basic", "webhooks/typeform"],
    },
    "changelog/changelog",
    "community/contributing",
    "community/faqs",
    {
      type: "category",
      label: "Reference",
      collapsed: true,
      items: ["reference/rowy-user", "reference/action-status"],
    },
  ],
};
