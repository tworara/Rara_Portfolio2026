$(function(){
    $('.info_left_boxbottommail .info1_left_boxbottomtext').click(function(){
        const infoCopyText = $(this).find('p').text()


        window.navigator.clipboard.writeText(infoCopyText).then(()=>{
            alert('복사 완료했습니다, 감사합니다!');
        })
    })
})