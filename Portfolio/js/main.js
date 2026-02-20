$(function(){

   /*  $('.contact .contact_mailtext').click(function(){
        $(this+' p').select().document.execCommand('copy');
    })
 */
    $('.contact_mailtext').click(function(){
        const copyText = $(this).find('p').text()

        window.navigator.clipboard.writeText(copyText).then(()=>{
            alert('복사 완료했습니다, 감사합니다!');
        })
    })
})