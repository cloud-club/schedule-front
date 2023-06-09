FROM node
# 해당 이미지 내에서 현재 경로를 /app으로 설정 
WORKDIR /app
# /app 폴더 생성 
COPY . ./
# 패키지 설치 
RUN npm i
# 빌드 실행 
CMD ["npm", "start"]


