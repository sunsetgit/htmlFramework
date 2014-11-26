$().ready(function() {
	$("#registerForm").validate({
		//debug: false,//只验证不提交
		rules: {
			name: {
				required: true,
				isName: true, //自定义方法
				minlength: true,
				maxlength: true
			},
			psword: {
				required: true,
				isPsword: true
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
				isName: "只能输入字母,数字,横线,下划线",
				minlength: true,
				maxlength: true
			},
			psword: {
				required: "请输入您的密码",
				isPsword: "只能输入字母,数字,横线,下划线",
				minlength: true,
				maxlength: true
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
		//提交表单
		submitHandler: function(form) {
			alert("提交")
				//form.submit();
		},
		//errorClass:"error",
		//errorElement:"lable",
		//errorContainer: "div.errorLable",
		//errorLabelContainer: $("#registerForm div.errorLable"),
		//wrapper: "li",
		/*showErrors: function(errorMap, errorList) {
			alert("您的表单中共有:" + this.numberOfInvalids() + "错误,请修正后提交!");
			this.defaultShowErrors();
		},*/

	});
	//自定义验证,addMethod(name,method,message),将name添加到rules中
	//name也可以在html中以class的形式验证,若与rules中所验证的为同一输入框,
	//则会以rules中对应的的提示信息展示,注意验证方式(提交验证,及时验证);
	//用户名称验证
	jQuery.validator.addMethod("isName", function(value, element) {
		var isName = /^[a-z0-9_-]{3,16}$/;
		return this.optional(element) || (isName.test(value));
	});
	//用户密码验证
	jQuery.validator.addMethod("isPsword", function(value, element) {
		var isPassword = /^[a-z0-9_-]{6,18}$/;
		return this.optional(element) || (isPassword.test(value));
	});
	//邮政编码验证
	jQuery.validator.addMethod("isZipCode", function(value, element) {
		//onkeyup: true; //及时验证
		var tel = /^[0-9]{6}$/;
		return this.optional(element) || (tel.test(value));
	}, "请正确填写您的邮政编码");
	
})