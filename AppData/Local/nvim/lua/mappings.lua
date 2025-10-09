require "nvchad.mappings"

-- add yours here

local map = vim.keymap.set

-- map("n", ";", ":", { desc = "CMD enter command mode" })
map("i", "jk", "<ESC>")

-- "Fixing" ctrl+Backspace. <C-BS> is actually sent as <C-H> by the temu
map("i", "<C-H>", "<C-w>", {silent = true, desc = 'delete from cursor to the beginning of word'})
--map("i", "<C-BS>", "db", {silent = true, desc = 'delete from cursor to ending word'})
--map("c", "<C-BS>", "db", {silent = true, desc = 'delete from cursor to ending word'})
--map("n", "<C-Del>", "dw", {silent = true, desc = 'delete from cursor to beginning word'})
--map("i", "<C-Del>", "dw", {silent = true, desc = 'delete from cursor to beginning word'})
--map("c", "<C-Del>", "dw", {silent = true, desc = 'delete from cursor to beginning word'})

-- map({ "n", "i", "v" }, "<C-s>", "<cmd> w <cr>")

-- Use ctrl+n to _focus_ NvimTree
map("n", "<leader>e", "<cmd>NvimTreeToggle<CR>", { desc = "nvimtree toggle window" })
map("n", "<C-n>", "<cmd>NvimTreeFocus<CR>", { desc = "nvimtree focus window" })

-- Open find files with ctrl+p
map("n", "<C-p>", "<cmd>Telescope find_files<cr>", { desc = "telescope find files" })
