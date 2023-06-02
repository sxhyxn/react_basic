# components 만들기 --> 폴더 #react2 참조

![image](https://github.com/sxhyxn/react_basic/assets/129706893/b7def13e-65e3-453b-bca4-417009ab2ce8)

# JSX 문법에서 javascript를 사용할 때는 {}를 사용
# HTML의 class를 react에서 만들 때는 classname="" 형식으로 만듦
![image](https://github.com/sxhyxn/react_basic/assets/129706893/e9f1c6eb-546b-49b6-b487-d93d9ccf156b)

# return문은 반드시 하나의 태그로 되어있어야함
![image](https://github.com/sxhyxn/react_basic/assets/129706893/f511c130-b064-44b2-9fa4-6c989402ae67)
# 해결방법 -> 부모태그로 싸줘야함 (ex.div or Fragment)
![image](https://github.com/sxhyxn/react_basic/assets/129706893/a91f6228-476b-4e0a-b9ba-2174080b3a9b)

# 함수 만들기
![image](https://github.com/sxhyxn/react_basic/assets/129706893/052ad327-274e-419b-8634-f69c7ffdeac1)
# 화살표 함수로 바꾸기
![image](https://github.com/sxhyxn/react_basic/assets/129706893/b46df376-0e02-48a8-8079-344f19ad75f1)
# 함수를 밖으로 빼기
![image](https://github.com/sxhyxn/react_basic/assets/129706893/6af95b25-89df-472a-ade5-4e6874809a6a)

# 클릭하면 함수 실행(Event Handling)
![image](https://github.com/sxhyxn/react_basic/assets/129706893/d761a6e3-826a-48a6-8582-36088c99dca5)
==> 화살표함수로 바뀜

# 함수 밖으로 빼기
![image](https://github.com/sxhyxn/react_basic/assets/129706893/33ba84bb-3b6d-4093-9e5e-b69a12a77fd1)

# 콘솔에는 숫자가 바뀌는데 화면에는 안 바뀜
  * react에서는 변수가 바뀐다해서 리랜더링이 일어나진 않음

![image](https://github.com/sxhyxn/react_basic/assets/129706893/3656b0f8-9590-415f-920e-502d8bf58532)

  * 해결책 ) 리랜더링이 일어나게 하려면 useState(react Hook)를 사용해야 한다.
![image](https://github.com/sxhyxn/react_basic/assets/129706893/7fa11817-9872-4f86-93e9-0a55492de42c)
(바뀌지만 console과 차이남)
