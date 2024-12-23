set ANDROID_SDK_ROOT=D:\programming\android\sdk
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.13.11-hotspot
copy capacitor.config.json.debug capacitor.config.json
CALL npx cap update
CALL npx cap run android