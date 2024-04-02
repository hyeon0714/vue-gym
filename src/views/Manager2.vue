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
                    <form action="">
                        <label for="">이름</label>
                        <input type="text">
                        <label for="">아이디</label>
                        <input type="text">
                        <label for="">번호</label>
                        <input type="text"><br>
                        
                        <label for="">주소</label>
                        <input type="text"><br>
                        <label for="">성별</label>
                        <input type="text">
                        <label for="">등록상태</label>
                        <input type="text">
                        <label for="">라커번호</label>
                        <input type="text"><br>
                        <button>수정</button>
                    </form>
                    <h3>결제정보</h3>
                    <form action="">
                        <label for="">등록일</label>
                        <input type="text">
                        <label for="">만료일</label>
                        <input type="text">
                        <label for="">결제금액</label>
                        <input type="text"><br>
                        <label for="">pt</label>
                        <input type="text">
                        <label for="">pt횟수</label>
                        <input type="text">
                        <label for="">pt금액</label>
                        <input type="text">
                    </form>
                    <h3>이용내역</h3>
                    <h4>회원권</h4>
                    <table>
                        <thead>
                            <tr>
                                <td>입실시간</td>
                                <td>퇴실시간</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>pt</h4>
                    <table>
                        <thead>
                            <tr>
                                <td>총횟수</td>
                                <td>사용횟수</td>
                                <td>잔여횟수</td>
                                <td>pt이용일</td>
                                <td>강사코멘트</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ManaGer',
    components: {},
    data() {
        return {

        }
    }
}
</script>