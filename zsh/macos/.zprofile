echo "Hello $(whoami), your level today is: $(python3 ~/lvl.py)" | lolcat

alias python=python3
export PATH="/usr/local/anaconda3/bin:$PATH"
export PATH=$PATH:~/.android-sdk-macosx/platform-tools/

  export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion


$alias pixel4="~/Library/Android/sdk/emulator/emulator -avd Pixel_4_API_32 -netdelay none -netspeed full"
