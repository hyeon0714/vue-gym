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
                <form action="">
                    <img src="" alt="">
                    <label for="">이름</label>
                    <input type="text">
                    <label for="">아이디</label>
                    <input type="text">
                    <label for="">번호</label>
                    <input type="text">
                    <label for="">주소</label>
                    <input type="text">
                    <label for="">성별</label>
                    <input type="text">
                    <p>회원수 : </p>
                    
                    <label for="">경력</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea><br>
                    <button>수정</button>
                </form>
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