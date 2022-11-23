({
    Submitclick : function(component, event, helper) {
       alert("success")
       component.set("v.Name","Saikiran")
       component.set("v.Salary","12000")
       component.set("v.Age","30")
    },
    Eraseclick : function(component, event, helper) {
        alert("Clear")
        component.set("v.Name","")
        component.set("v.Salary","")
        component.set("v.Age","")
    }
})
