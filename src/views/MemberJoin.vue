<template>
    <div>
        <form v-on:submit.prevent="join" action="">
            <label for="">아아디</label>
            <input type="text" v-model="memberVo.id">
            <button v-on:click="idCheck" type="button">중복체크</button><br>
            <label for="">비밀번호</label>
            <input type="text" v-model="memberVo.password"><br>
            <label for="">이름</label>
            <input type="text" v-model="memberVo.name"><br>
            <label for="">주소</label>
            <input type="text" v-model="memberVo.address"><br>
            <label for="">성별</label>
            <input type="text" v-model="memberVo.gender"><br>
            <label for="">번호</label>
            <input type="text" placeholder="-없이 입력해주세요" v-model="memberVo.hp"><br>
            <label for="">나이</label>
            <input type="text" v-model="memberVo.age"><br>
            <label for="">등록일수</label><br>
            <label for="30"> 30일 </label>
            <input type="radio" name="regiDay" id="30" value="30" v-model="memberVo.regiDay">
            <label for="90"> 90일 </label>
            <input type="radio" name="regiDay" id="90" value="90" v-model="memberVo.regiDay">
            <label for="180"> 180일 </label>
            <input type="radio" name="regiDay" id="180" value="180" v-model="memberVo.regiDay">
            <label for="360"> 360일 </label>
            <input type="radio" name="regiDay" id="360" value="360" v-model="memberVo.regiDay">
            <br><br><br>
            <button type="submit">회원가입</button>



        </form>
    </div>
</template>
<script>

import axios from 'axios';


export default {
    name: "MemberJoin",
    components: {},
    data() {
        return {
            memberVo: {
                id: "",
                password: "",
                name: "",
                address: "",
                gender: "",
                hp: "",
                age: "",
                regiDay: ""
            },
            a: 1
        }
    },
    methods: {
        idCheck() {
            let id = this.memberVo.id
            console.log(id)
            axios({
                method: 'post', // put, post, delete 
                url: 'http://localhost:8889/api/membercheck',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.memberVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타


                this.a = 1;
            }).catch(error => {
                console.log(error);
            });
        },
        join() {
            if (this.a != 1) {
                alert("아이디 중복확인을 해주세요")
            } else {//중복체크 완료되면 바꾸기 ++ 빈칸 잇으면 메세지창 띄우기
                console.log(this.memberVo)
                axios({
                    method: 'post', // put, post, delete 
                    url: 'http://localhost:8889/api/memberjoin',
                    headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                    //params: guestbookVo, //get방식 파라미터로 값이 전달
                    data: this.memberVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                    responseType: 'json' //수신타입
                }).then(response => {
                    console.log(response); //수신데이타


                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }
}

</script>