/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting started',
      link: { type: 'doc', id: 'getting-started/index' },
      items: [
        'getting-started/prerequisites',
        {
          type: 'category',
          label: 'Agent Setup',
          link: { type: 'doc', id: 'getting-started/set-up/index' },
          items: [
            'getting-started/set-up/aries-askar',
            'getting-started/set-up/anoncreds',
            'getting-started/set-up/indy-vdr',
            'getting-started/set-up/cheqd/index',
            'getting-started/set-up/openid4vc',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      link: { type: 'doc', id: 'concepts/index' },
      items: ['concepts/agents', 'concepts/did-and-didcomm', 'concepts/platform-and-environment'],
    },
    {
      type: 'category',
      label: 'Features',
      link: { type: 'doc', id: 'features/index' },
      items: ['features/aries', 'features/openid4vc', 'features/dids', 'features/credentials'],
    },
    {
      type: 'category',
      label: 'Tutorials',
      link: { type: 'doc', id: 'tutorials/index' },
      items: [
        {
          type: 'category',
          label: 'Agent Config',
          link: { type: 'doc', id: 'tutorials/agent-config/index' },
          items: ['tutorials/agent-config/logging'],
        },
        'tutorials/create-a-connection',
        'tutorials/cheqd/index',
        'tutorials/registering-schema-and-credential-definition',
        'tutorials/issue-an-anoncreds-credential-over-didcomm',
        'tutorials/mediation',
        {
          type: 'category',
          label: 'OpenID for Verifiable Credentials',
          link: { type: 'doc', id: 'tutorials/openid4vc/index' },
          items: [
            'tutorials/openid4vc/issuing-credentials-using-openid4vc-issuer-module',
            'tutorials/openid4vc/receiving-and-proving-credentials-using-openid4vc-holder-module',
            'tutorials/openid4vc/verifying-credentials-using-openid4vc-verifier-module',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Updating',
      link: { type: 'doc', id: 'updating/index' },
      items: [
        'updating/update-assistant',
        'updating/update-indy-sdk-to-askar',
        'updating/versions/0.1-to-0.2',
        'updating/versions/0.2-to-0.3',
        'updating/versions/0.3-to-0.4',
        'updating/versions/0.4-to-0.5',
      ],
    },
    'ecosystem/index',
    {
      type: 'category',
      label: 'Extensions',
      link: { type: 'doc', id: 'extensions/index' },
      items: [
        {
          type: 'doc',
          label: 'REST API',
          id: 'extensions/rest',
        },
        {
          type: 'doc',
          label: 'React Hooks',
          id: 'extensions/react-hooks',
        },
        {
          type: 'doc',
          label: 'Redux Store',
          id: 'extensions/redux-store',
        },
        {
          type: 'doc',
          label: 'Push Notifications',
          id: 'extensions/push-notifications',
        },
      ],
    },
  ],
}

module.exports = sidebars
