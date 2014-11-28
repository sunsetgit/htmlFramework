$().ready(function() {
	var registerValidator = $("#registerForm").validate({

		rules: {
			name: {
				required: true,
				minlength: 3,
				maxlength: 6
			},
			psword: {
				required: true,
			},
			againPassword: {
				required: true,
				equalTo: "#psword"
			},
			email: {
				email: true
			},

		},
		messages: {
			name: {
				required: "请输入用户名",
				minlength: "",
				maxlength: ""
			},
			psword: {
				required: "请输入您的密码",
				minlength: "",
				maxlength: ""
			},
			againPassword: {
				required: "请再次输入您的密码",
				equalTo: "两次输入的密码不一致"
			},
			email: "请输入正确格式的电子邮件"


			/*
			
			required: "必选字段",
			remote: "请修正该字段",
			email: "请输入正确格式的电子邮件",
			url: "请输入合法的网址",
			date: "请输入合法的日期",
			dateISO: "请输入合法的日期 (ISO).",
			number: "请输入合法的数字",
			digits: "只能输入整数",
			creditcard: "请输入合法的信用卡号",
			equalTo: "请再次输入相同的值",
			accept: "请输入拥有合法后缀名的字符串",
			maxlength: jQuery.validator.format("请输入一个 长度最多是 {0} 的字符串"),
			minlength: jQuery.validator.format("请输入一个 长度最少是 {0} 的字符串"),
			rangelength: jQuery.validator.format("请输入 一个长度介于 {0} 和 {1} 之间的字符串"),
			range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
			max: jQuery.validator.format("请输入一个最大为{0} 的值"),
			min: jQuery.validator.format("请输入一个最小为{0} 的值")*/
		},

		//debug: true,//调试模式只验证不提交
		onkeyup: false,
		errorClass: "error",
		validClass: "success",
		errorElement: "span",
		success: "success",

		/*highlight: function(element, errorClass) {
			$(element).addClass(errorClass).removeClass("success");
		},
		success: function(span) {
			span.addClass("success");
		},*/
		//提交表单
		submitHandler: function(form) {
			alert("提交")
				//form.submit();
		},
		//验证是否有错误信息
		invalidHandler: function(form, validator) {
			var errors = validator.numberOfInvalids();
			if (errors) { //0表示false,非0表示true;
				$("#message").text(validator.numberOfInvalids() + "error");
				$("#message").show();
			} else {
				$("#message").hide();
			}

		},
		//errorClass:"error",
		//errorElement:"lable",

		//将错误信息放到一个容器内
		//errorContainer: "div.errorLable",
		//errorLabelContainer: $("#registerForm div.errorLable"),
		//wrapper: "li",

		//打印错误个数
		/*showErrors: function(errorMap, errorList) {
			alert("您的表单中共有:" + this.numberOfInvalids() + "错误,请修正后提交!");
			this.defaultShowErrors();
		},*/

	});
	//自定义验证,addMethod(name,method,message),将name添加到对应表单中的class内;
	//用户名称验证
	jQuery.validator.addMethod("isName", function(value, element) {
		var isName = /^[a-z0-9_-]{3,16}$/;
		return this.optional(element) || (isName.test(value));
	}, "只能输入字母,数字,横线,下划线");
	//用户密码验证
	jQuery.validator.addMethod("isPsword", function(value, element) {
		var isPassword = /^[a-z0-9_-]{6,18}$/;
		return this.optional(element) || (isPassword.test(value));
	}, "只能输入字母,数字,横线,下划线");
	//邮政编码验证
	jQuery.validator.addMethod("isZipCode", function(value, element) {
		//onkeyup: true; //及时验证
		var tel = /^[0-9]{6}$/;
		return this.optional(element) || (tel.test(value));
	}, "请正确填写您的邮政编码");
	//检验是否通过验证,常结合invalidHandler使用
	$(".isValid").on("focusout", function() {
		$(this).parents("form").valid();
		//$("#registerForm").valid();
		return false;
	});


})