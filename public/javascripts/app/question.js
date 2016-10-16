
var question = {};

question.Question = function(data) {
    this.title = m.prop(data.title);
    this.author = m.prop(data.author);
    this.content = m.prop(data.content);
};

question.QuestionFeed = Array;

question.vm = (function() {
    var vm = {};
    vm.init = function() {
        vm.list = new question.QuestionFeed();

        // the title of the question to search or create
        vm.title = m.prop("");

        vm.add = function() {
            if (vm.title()) {

            }
        }
    }

});