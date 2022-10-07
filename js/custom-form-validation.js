$().ready(function() {
  $("#myForm").validate({

    rules: {
        firstname: "required",
        lastname: {
            required: true,
            minlength: 5
        },
        email: {
            required: true,
            matcEmail: true //Validates for our custom method
        /* For any email you would do
           email: true
        */
        },
        password: {
            required: true,
            minlength: 5
        },
        confirmPassword: {
            required: true,
            minlength: 5,
            equalTo: "#password"
        }
    },

    messages: {
        firstname: "It says your first name is required...",
        lastname: {
            required: "Yup, last name says required too",
            minlength: "I said at least 5 characters!"
        },
        password: {
            required: "What don't you understand about required?",
            minlength: "I said at least 5 characters! Its not that hard..."
        },
        confirmPassword: {
            required: "Yes, confirming the password is required",
            minlength: "Yup, confirming also needs to be 5 characters",
            equalTo: "Confirming password.... That means enter the same thing as above"
        },
        email: {
            required: "Im sorry this is so hard for you, but email is required"
        }
    },

    //Uses native form element to stop recursion error. bad -> $(form).submit();
    submitHandler: function(form) {
        form.submit();
    }
  });
});

jQuery.validator.addMethod("matcEmail", function(value, element) {
    return this.optional(element) || /^.+@madisoncollege.edu$/.test(value);
}, "Only Madison College email addresses are allowed");
