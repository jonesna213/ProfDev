$().ready(function() {
  $("#myForm").validate({

    rules: {
        firstname: "required",
        lastname: {
            required: true,
            minlength: 5
        },
        password: {
            required: true,
            minlength: 5
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
        }
    },

    //Uses native form element to stop recursion error. bad -> $(form).submit();
    submitHandler: function(form) {
        form.submit();
    }
  });
});
