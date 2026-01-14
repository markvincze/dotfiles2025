return {
  {
    "stevearc/conform.nvim",
    --event = "BufWritePre", -- uncomment for format on save
    opts = require "configs.conform",
  },

  -- These are some examples, uncomment them if you want to see them work!
  {
    "neovim/nvim-lspconfig",
    config = function()
      require "configs.lspconfig"
    end,
  },

  {
    "mrcjkb/rustaceanvim",
    version = "^6", -- Recommended
    lazy = false, -- This plugin is already lazy
  },

  {
    "rust-lang/rust.vim",
    ft = "rust",
    init = function()
      vim.g.rustfmt_autosave = 1
    end,
  },

  {
    "saecki/crates.nvim",
    ft = "toml",
    config = function()
      require("crates").setup {
        completion = {
          cmp = {
            enabled = true,
          },
        },
      }
      require("cmp").setup.buffer {
        sources = { { name = "crates" } },
      }
    end,
  },

  {
    "petertriho/nvim-scrollbar",
    config = function()
      require("scrollbar").setup()
    end,
  },

  {
    "mason-org/mason.nvim",
    opts = {
      registries = {
        "github:mason-org/mason-registry",
        "github:Crashdummyy/mason-registry",
      },
      ensure_installed = {
        "pyright",
        "prettier",
        "csharpier",
        "roslyn",
        "rzls",
        "typescript-language-server",
        "rust-analyzer",
        "golangci-lint"
      },
    },
  },

  {
    "pmizio/typescript-tools.nvim",
    dependencies = { "nvim-lua/plenary.nvim", "neovim/nvim-lspconfig" },
    opts = {},
  },

  {
    "seblyng/roslyn.nvim",
    ---@module 'roslyn.config'
    ---@type RoslynNvimConfig
    ft = { "cs", "razor" },
    opts = {
      filewatching = "roslyn",
      -- your configuration comes here; leave empty for default settings
    },
  },

  -- test new blink
  -- { import = "nvchad.blink.lazyspec" },

  {
    "nvim-treesitter/nvim-treesitter",
    opts = {
      ensure_installed = {
        "vim",
        "lua",
        "vimdoc",
        "html",
        "css",
        "python",
        "c_sharp",
        "luadoc",
        "typescript",
        "printf",
        "razor",
      },
    },
  },

  {
    "nvim-tree/nvim-tree.lua",
    opts = {
      view = {
        adaptive_size = true,
      },
      git = {
        ignore = false,
      }
    },
  },

  {
    "folke/which-key.nvim",
    lazy = false,
  }

  -- {
  --   "mfussenegger/nvim-lint",
  --   lazy = true,
  --   event = { "BufReadPre", "BufNewFile" }, -- to disable, comment this out
  --   config = function()
  --       local lint = require("lint")
  --
  --       lint.linters_by_ft = {
  --           go = { "golangcilint" },
  --       }
  --
  --       local lint_augroup = vim.api.nvim_create_augroup("lint", { clear = true })
  --
  --       vim.api.nvim_create_autocmd({ "BufEnter", "BufWritePost", "InsertLeave" }, {
  --           group = lint_augroup,
  --           callback = function()
  --               lint.try_lint()
  --           end,
  --       })
  --
  --       vim.keymap.set("n", "<leader>li", function()
  --           lint.try_lint()
  --       end, { desc = "Trigger linting for current file" })
  --   end,
  -- }

}
