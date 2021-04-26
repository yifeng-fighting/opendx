for /f "tokens=1-2 delims=:" %%a in ('ipconfig^|find "IPv4"') do set ip=%%b
for /f "tokens=*" %%i in ("%ip%") do set ip=%%i

REM java -jar agent-0.8.8.jar --ip=%ip% --server=http://10.120.22.27:8887 --android=true
java -jar agent-0.8.8.jar --ip=%ip% --server=http://%ip%:8887 --android=true --pc-web=true

echo "exit"