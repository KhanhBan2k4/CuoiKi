$(document).ready(function () {
    // Event binding using 'on' for dynamic elements
    $(document).on('click', '#userSignUp', function (e) {
        e.preventDefault()
        $('#login').modal('hide')
    })

    let inforUser = ['admin@gmail.com','Khanh1111']

    // Validation functions...

    function displayError(element, message) {
        // Display error messages and handle styles
        element.html(message).addClass('text-danger')
    }

    function clearError(element) {
        // Clear error messages and reset styles
        element.html('(*)').removeClass('text-danger')
    }

    function ktEmail() {
        var email = $("#txtEmailSignUp").val()
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (email === '') {
            displayError($('#errEmailSignUp'), 'Vui lòng nhập địa chỉ email.')
            return false
        } else if (!emailRegex.test(email)) {
            displayError($('#errEmailSignUp'), 'Địa chỉ email không hợp lệ.')
            return false
        } else {
            clearError($('#errEmailSignUp'))
            inforUser.push(email)
            return true
        }
    }

    function ktPassword1() {
        var password = $("#InputPassword1").val()
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

        if (password === '') {
            displayError($('#errPassword'), 'Vui lòng điền mật khẩu của bạn.')
            return false
        } else if (!passwordRegex.test(password)) {
            displayError($('#errPassword'), 'Mật khẩu của bạn không đúng định dạng.')
            return false
        } else {
            clearError($('#errPassword'))
            inforUser.push(password)
            return true
        }
    }

    function ktPassword2() {
        var confirmPassword = $("#InputPassword2").val()
    
        if (confirmPassword === '') {
            displayError($('#errConfimPassword'), 'Vui lòng điền mật khẩu của bạn.')
            return false
        } else if (confirmPassword !== inforUser[1]) {
            displayError($('#errConfimPassword'), 'Mật khẩu không khớp! Vui lòng điền lại.')
            return false
        } else {
            clearError($('#errConfimPassword'))
            return true
        }
    }    

    $(document).on('click', '#setUser', function (e) {
        e.preventDefault()
        if (ktEmail() && ktPassword1() && ktPassword2()) {
            var email = $("#txtEmailSignUp").val()
            var password = $("#InputPassword1").val()

            inforUser.push(email)
            inforUser.push(password)

            // Display success message or perform other actions
            $('#login').modal('show')
            $('#sign-up').modal('hide')
        }
    })

    // Login check
    $(document).on('click', '#userLogin', function (e) {
        e.preventDefault()
        checkLog()
    })

    function checkLog() {
        var logEmail = $('#logEmail').val()
        var logPassword = $('#logPassword').val()
        if (inforUser.length === 0 || (logEmail !== inforUser[0] || logPassword !== inforUser[1])) {
            displayError($('#errLoginUser'), 'Email hoặc mật khẩu của bạn không khớp.')
            return false
        } else {
            $("#userLogin").attr("data-target", "#formInfor")
            $('#login').modal('hide')
            return true
        }
    }

    let addressUser = []

    $('#update').click(function() {
        let updateAddress = $('#updateAddress').val()
        $('#address').css('display', 'none')
        $('#newAlert').html('CẬP NHẬT ĐỊA CHỈ THÀNH CÔNG!')
        addressUser.push(updateAddress)
    })
})
