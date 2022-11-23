({
    submitclick : function(component, event, helper) {
        var name = component.find('empname').get("v.value")
        var age =component.find('empage').get("v.value")
        var salary= component.find('empsalary').get("v.value")
        console.log(name);
        console.log(age);
        console.log(salary);

    }
})
