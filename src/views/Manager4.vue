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
                    <table>
                        <thead>
                            <tr>
                                <td>pt회원이름</td>
                                <td>pt 총횟수</td>
                                <td>pt 이용횟수</td>
                                
                            </tr>
                        </thead>
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