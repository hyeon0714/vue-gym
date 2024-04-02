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
                    <table border="1px solid #000000">
                        <thead>
                            <tr>
                                <td>이름</td>
                                <td>번호</td>
                                <td>등록월수</td>
                                <td>등록상태</td>
                                <td>만료일</td>
                                <td>라커번호</td>
                                <td>pt강사</td>
                                <td>등록횟수</td>
                                <td>잔여횟수</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>김재현</td>
                                <td>010-9999-9999</td>
                                <td>3개월</td>
                                <td>등록</td>
                                <td>0000-00-00</td>
                                <td>55</td>
                                <td>김재현</td>
                                <td>10회</td>
                                <td>8회</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="paging">
                    <ul>
                        <li><a href="">◀</a></li>
                        <li><a href="">1</a></li>
                        <li><a href="">2</a></li>
                        <li><a href="">3</a></li>
                        <li><a href="">4</a></li>
                        <li><a href="">▶</a></li>
                    </ul>

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