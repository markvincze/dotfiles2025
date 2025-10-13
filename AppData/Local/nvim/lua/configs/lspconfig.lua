require("nvchad.configs.lspconfig").defaults()

vim.lsp.config("pyright", {
  filetypes = { "python" },
})

-- read :h vim.lsp.config for changing options of lsp servers

require("typescript-tools").setup {}

vim.lsp.config("emmet_language_server", {
  filetypes = {
    "astro",
    "css",
    "eruby",
    "html",
    "javascript",
    "javascriptreact",
    "less",
    "php",
    "pug",
    "sass",
    "scss",
    "typescriptreact",
  },
  -- Read more about this options in the [vscode docs](https://code.visualstudio.com/docs/editor/emmet#_emmet-configuration).
  -- **Note:** only the options listed in the table are supported.
  init_options = {
    --- @type string[]
    excludeLanguages = {},
    --- @type string[]
    extensionsPath = {},
    --- @type table<string, any> [Emmet Docs](https://docs.emmet.io/customization/preferences/)
    preferences = {},
    --- @type boolean Defaults to `true`
    showAbbreviationSuggestions = true,
    --- @type "always" | "never" Defaults to `"always"`
    showExpandedAbbreviation = "always",
    --- @type boolean Defaults to `false`
    showSuggestionsAsSnippets = false,
    --- @type table<string, any> [Emmet Docs](https://docs.emmet.io/customization/syntax-profiles/)
    syntaxProfiles = {},
    --- @type table<string, string> [Emmet Docs](https://docs.emmet.io/customization/snippets/#variables)
    variables = {},
  },
})

vim.lsp.config("roslyn", {})

local servers = { "html", "cssls", "pyright", "emmet_language_server", "roslyn" }
vim.lsp.enable(servers)
