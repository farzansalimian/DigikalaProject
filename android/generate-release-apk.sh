#!/bin/bash

cd "$(dirname "$0")"
if [ ! -f uber-apk-signer-1.1.0.jar ]; then
  echo "Downloading uber-apk-signer-1.1.0.jar..."
  curl -sSL -O https://github.com/patrickfav/uber-apk-signer/releases/download/v1.1.0/uber-apk-signer-1.1.0.jar
  if [ $? != 0 ]; then
    echo "Cannot download uber-apk-signer!"
    exit 1
  fi
fi
./gradlew assembleRelease
cp app/build/outputs/apk/release/app-arm64-v8a-release.apk app-arm64-v8a-release-signed-aligned.apk
cp app/build/outputs/apk/release/app-armeabi-v7a-release.apk app-armeabi-v7a-release-signed-aligned.apk
cp app/build/outputs/apk/release/app-universal-release.apk app-universal-release-signed-aligned.apk
cp app/build/outputs/apk/release/app-x86_64-release.apk app-x86_64-release-signed-aligned.apk
cp app/build/outputs/apk/release/app-x86-release.apk app-x86-release-signed-aligned.apk

if [ ! -f ../spstore.jks ]; then
  echo "spstore.jks does not exist!"
  exit 1
fi
java -jar uber-apk-signer-1.1.0.jar -a ./app-arm64-v8a-release-signed-aligned.apk --allowResign --ks ../spstore.jks  --ksAlias spmobile --overwrite
java -jar uber-apk-signer-1.1.0.jar -a ./app-armeabi-v7a-release-signed-aligned.apk --allowResign --ks ../spstore.jks  --ksAlias spmobile --overwrite
java -jar uber-apk-signer-1.1.0.jar -a ./app-universal-release-signed-aligned.apk --allowResign --ks ../spstore.jks  --ksAlias spmobile --overwrite
java -jar uber-apk-signer-1.1.0.jar -a ./app-x86_64-release-signed-aligned.apk --allowResign --ks ../spstore.jks  --ksAlias spmobile --overwrite
java -jar uber-apk-signer-1.1.0.jar -a ./app-x86-release-signed-aligned.apk --allowResign --ks ../spstore.jks  --ksAlias spmobile --overwrite

echo "The signed files is located in $PWD"

