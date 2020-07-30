const Ray = function() {
    const ray = {
        length: 0,
        push: function(value){
            ray[String(ray.length)]=value;
            ray.length++;
        },
        pop: function(){
            const bye = ray[String(ray.length-1)]
            delete ray[String(ray.length-1)];
            ray.length --;
            return bye;
        },
        includes: function(value){
            for(let i=0;i<ray.length;i++){
                if (ray[i]===value){return true}
            }
            return false;
        },
        indexOf: function(str){
            for(let i=0;i<ray.length;i++){
                if (ray[i]===str){return i}
            }
            return -1;
        },
        shift: function(){
            const first = ray['0'];
            for(let i=0; i<ray.length-1;i++){
                ray[String(i)] = ray[String(i+1)];
            }
            delete ray[String(ray.length-1)];
            ray.length --;
            return first;
        },
        unshift: function(value){
            for(let i=ray.length; i>=1;i--){
                ray[String(i)] = ray[String(i-1)]
            }
            ray['0'] = value;
            ray.length++;
            return ray;
        },
    };
 return ray
}



module.exports = Ray
