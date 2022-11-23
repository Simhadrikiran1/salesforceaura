({
    handler : function(component, event, helper) {
            var acc = component.get("v.acc")
            console.log(acc.Name)
            console.log(acc.Phone)
            var con= component.get("v.con")
            console.log(con.FirstName)
            console.log(con.LastName)
    }
})
