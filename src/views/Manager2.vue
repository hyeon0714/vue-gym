<template>
    <div id="manager">
        <div id="head">
            <h1>웹사이트</h1>

        </div>
        <!--헤더-->
        <div class="clearfix">
            <div id="managerinfo">
                <p>회원정보</p>
                <p>강사정보</p>
            </div>
            <!--내비-->
            <div id="minfo">
                <div>
                    <h3>회원정보</h3>
                    <form v-on:submit.prevent="" action="">
                        <label for="">이름</label>
                        <input type="text" v-model="this.memberVo.name">
                        <label for="">아이디</label>
                        <input type="text" v-model="this.memberVo.id">
                        <label for="">번호</label>
                        <input type="text" v-model="this.memberVo.hp"><br>

                        <label for="">주소</label>
                        <input type="text" v-model="this.memberVo.address"><br>
                        <label for="">성별</label>
                        <input type="text" v-model="this.memberVo.gender">
                        <label for="">등록상태</label>
                        <input type="text" v-model="this.memberVo.approval">
                        <label for="">라커번호</label>
                        <input type="text" v-model="this.memberVo.lockerNo"><br>
                        <button>수정</button>
                    </form>
                    <h3>결제정보</h3>
                    <form action="">
                        <label for="">등록일</label>
                        <input type="text" v-model="this.generalVo.regDate">
                        <label for="">만료일</label>
                        <input type="text" v-model="this.generalVo.deadLine">
                        <label for="">결제금액</label>
                        <input type="text" v-model="this.generalVo.price"><br>
                        <label for="">pt총결제횟수</label>
                        <input type="text" v-model="this.ptVo.ptTotal">
                        <label for="">pt이용횟수</label>
                        <input type="text" v-model="this.ptVo.ptCount">
                    </form>
                    <h3>이용내역</h3>
                    <h4>회원권</h4>
                    <table border="1px">
                        <thead>
                            <tr>
                                <td>입실시간</td>
                                <td>퇴실시간</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-bind:key="i" v-for="(a, i) in this.attendList">
                                <td>{{ a.entryTime }}</td>
                                <td>{{ a.leaveTime }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>pt</h4>
                    <table border="1px">
                        <thead>
                            <tr>
                                <td>pt이용일</td>
                                <td>강사코멘트</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-bind:key="i" v-for="(l, i) in this.lessonList">
                                <td>{{ l.lDate }}</td>
                                <td>{{ l.comment }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>결제정보</h4>
                    <table border="1px">
                        <thead>
                            <tr>
                                <td>결제일</td>
                                <td>이용기한</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-bind:key="i" v-for="(g, i) in this.generalList">
                                <td>{{ g.regDate }}</td>
                                <td>{{ g.deadLine }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'ManaGer',
    components: {},
    data() {
        return {
            no: "",
            memberVo: {
                name: "",
                id: "",
                hp: "",
                address: "",
                gender: "",
                approval: "",
                lockerNo: ""
            },
            generalVo: {
                regDate: "",
                deadLine: "",
                price: ""
            },
            ptVo: {
                ptTotal: "",
                ptCount: ""
            },
            attendList: [],
            lessonList: [],
            generalList: []
        }
    },
    methods: {
        No() {
            const urlParams = new URL(location.href).searchParams;

            const no = urlParams.get('no');
            this.no = no
        },
        member1() {
            console.log(this.no);
            axios({
                
                method: 'post', // put, post, delete 
                url: 'http://localhost:8889/api/gym/manager/member',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: this.no, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타
                
                this.memberVo = response.data.mv
                this.generalVo = response.data.gv
                this.ptVo = response.data.pv
                this.attendList = response.data.attendList
                this.lessonList = response.data.lessonList
                this.generalList = response.data.generalList
                console.log(this.generalVo)
            }).catch(error => {
                console.log(error);
            });

        }
    },
    created() {
        this.No();
        this.member1();
    }
}

</script>