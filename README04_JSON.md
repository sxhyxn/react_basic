
![image](https://github.com/sxhyxn/react_basic/assets/129706893/12c725be-7add-4792-a30d-3fe7dab44f60)

    npm i json-server

# db.json 파일은 root에 만들어야한다.(제일 바깥 폴더)
![image](https://github.com/sxhyxn/react_basic/assets/129706893/9b3e1925-2eff-461f-a453-f35c54dda2fc)

# db.json 실행하기
![image](https://github.com/sxhyxn/react_basic/assets/129706893/23cf4d7a-51db-4d15-8479-1c67e1c6b3ca)
# 위와 같이 실행하면 port를 3000번을 실행하기 때문에 react와 중복이 되어버린다.
# 그래서 port를 변경해주어야한다.
        json-server --watch db.json --port 3004
# 만역 실행이 안된다면 아래를 적용한다.
        npx json-server --watch db.json --port 3004
