({
    
    mult : function(component, event, helper) {
        var A = component.get("v.num1")
        var B = component.get("v.num2")
        component.get('v.positive')
        var C = A*B
        if (C > 0){
            component.set('v.positive' ,true)
            component.set("v.result" ,C)

        }
        
    }
})
