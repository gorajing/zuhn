Output "clips/05-terminal-proof.mp4"
Set Shell "bash"
Set FontSize 27
Set Width 1280
Set Height 720
Set Padding 42
Set TypingSpeed 24ms
Set Theme "Catppuccin Mocha"
Set WindowBar Colorful
Set WindowBarSize 38

Hide
Type "cd /Users/jinchoi/Code/Zuhn && clear"
Enter
Sleep 500ms
Show

Type "npm run health | grep -E 'Insights:|Principles:|Sources:|Tensions:|Referential integrity|Health check'"
Enter
Sleep 3200ms

Type "npm run verify-contracts"
Enter
Sleep 2400ms
