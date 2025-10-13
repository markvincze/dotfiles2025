Import-Module posh-git
Import-Module -Name Terminal-Icons
Import-Module z

Remove-Item alias:rm
Remove-Item alias:where -Force
Remove-Item alias:ls

function LsForce {
    Get-ChildItem -Force
}

New-Alias ls LsForce

New-Alias k kubectl
$env:KUBE_EDITOR="vim"

set-psreadlineoption -PredictionViewStyle ListView

#oh-my-posh init pwsh | Invoke-Expression
#oh-my-posh init pwsh --config 'C:\Users\markv\AppData\Local\Programs\oh-my-posh\themes\stelbent.minimal.omp.json' | Invoke-Expression

# Import the Chocolatey Profile that contains the necessary code to enable
# tab-completions to function for `choco`.
# Be aware that if you are missing these lines from your profile, tab completion
# for `choco` will not function.
# See https://ch0.co/tab-completion for details.
$ChocolateyProfile = "$env:ChocolateyInstall\helpers\chocolateyProfile.psm1"
if (Test-Path($ChocolateyProfile)) {
  Import-Module "$ChocolateyProfile"
}

Invoke-Expression (&starship init powershell)
