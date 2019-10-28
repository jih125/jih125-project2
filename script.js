new Vue({
  el: "#app",
  data: function() {
    return {
      visible: false,
      activeName: "first",
      ruleForm: {
        name: "",
        term: "",
        email: "",
        program: "",
        date1: "",
        date2: "",
        scholarship: "",
        status: ""
      },
      tableData: [
        {
          name: "Patrick Hu",
          term: "2019 Fall",
          program: "graduate",
          email: "jih125@pitt.edu",
          date1: "2018-08-26",
          date2: "2020-04-25",
          scholarship: "No",
          status: "Studying"
        },
        {
          name: "Bruce Wayne",
          term: "2019 Fall",
          program: "PhD",
          email: "brucewayne@pitt.edu",
          date1: "2019-08-27",
          date2: "2021-04-27",
          scholarship: "Yes",
          status: "On vacation"
        },
        {
          name: "James Gordon",
          term: "2019 Spring",
          program: "undergraduate",
          email: "jamesgordon@pitt.edu",
          date1: "2018-08-26",
          date2: "2020-04-25",
          scholarship: "No",
          status: "Studying"
        }
      ],
      rules: {
        name: [
          {
            required: true,
            message: "Please input your name",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            message: "Please input your Pitt email",
            trigger: "blur"
          }
        ],
        program: [
          {
            required: true,
            message: "Please select your program",
            trigger: "change"
          }
        ],
        term: [
          {
            required: true,
            message: "Please select your term",
            trigger: "change"
          }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "Please pick a time",
            trigger: "change"
          }
        ],
        status: [
          {
            required: true,
            message: "Please select student status",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          let student = {
            name:this.ruleForm.name,
            program:this.ruleForm.program,
            term:this.ruleForm.term,
            date1:this.ruleForm.date1,
            date2:this.ruleForm.date2,
            email:this.ruleForm.email,
            scholarship:this.ruleForm.scholarship,
            status:this.ruleForm.status
          }
          console.log(student);
          this.tableData.push(student);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
});
