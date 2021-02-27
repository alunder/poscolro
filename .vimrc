" prettier-eslint will run prettier
let g:neoformat_javascript_prettier = {
      \ 'exe': './node_modules/.bin/prettier',
      \ 'args': ['--write', '--config .prettierrc'],
      \ 'replace': 1
      \ }

let g:neoformat_javascript_eslint_d = {
      \ 'exe': './node_modules/.bin/eslint_d',
      \ 'args': ['--stdin', '--stdin-filename', '"%:p"', '--fix-to-stdout'],
      \ 'stdin': 1
      \ }
