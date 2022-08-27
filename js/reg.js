window.addEventListener('load', function () {
    // var phone = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/ 
    var regtel = /^1[3|4|5|7|8]\d{9}$/   //手机号码的正则表达式
    var tel = document.querySelector('#tel')
    regxp(tel, regtel)

    var regqq = /^[1-9]\d{4,}$/  //QQ号码的正则表达式
    var qq = document.querySelector('#qq')
    regxp(qq, regqq)

    var regnc = /^[\u4e00-\u9fa5]{2,8}$/  //昵称的正则表达式
    var nc = document.querySelector('#nc')
    regxp(nc, regnc)

    var regyzm = /^\d{6}$/  //短信验证码的正则表达式
    var duanxin = document.querySelector('#duanxin')
    regxp(duanxin, regyzm)

    var regpwd = /^[a-zA-Z0-9-_]{6,16}$/   //密码的正则表达式
    var pwd = document.querySelector('#psd')
    regxp(pwd, regpwd)

    // 表单验证的函数
    function regxp(ele, reg) {
        ele.addEventListener('blur', function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success'
                this.nextElementSibling.innerHTML = '<i class="success-icon"></i>恭喜你,输入正确'
            } else {
                this.nextElementSibling.className = 'error'
                this.nextElementSibling.innerHTML = '<i class="error-icon"></i>输入格式错误'
            }
        })
    }
    var surepwd = document.querySelector('#psd-queren')
    surepwd.addEventListener('blur', function () {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success'
            this.nextElementSibling.innerHTML = '<i class="success-icon"></i>恭喜你,输入正确'
        } else {
            this.nextElementSibling.className = 'error'
            this.nextElementSibling.innerHTML = '<i class="error-icon"></i>两次输入不一致'
        }
    })
})