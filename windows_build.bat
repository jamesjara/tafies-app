
echo "Building TAFIES"

rm -rf public\resources
mkdir public\resources
mkdir public\resources\js
xcopy ..\resources public\resources /D /E /C /R /H /I /K /Y

xcopy ..\app public\resources\js /D /E /C /R /H /I /K /Y
cp ..\app.js public\resources\js\app.js


echo "Done!"
pause 1

