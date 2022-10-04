class Cache{

    cache = new Map();
    appeals = new Map();
    log;

    setCache(key, value, times = 1) {
        this.cache.set(key, value); 
        this.appeals.set(key, times); 
    }

    getCache(key) {
        if (this.appeals.get(key)) {
            const value = this.appeals.get(key)
            if (value != 0) {
                this.appeals.set(key, value - 1);
                return this.cache.get(key);
            } else {
                this.appeals.delete(key);
                this.cache.delete(key);
            }
        }
        return null;
    }

    getStatistics(){
        this.log = ''
        this.cache.forEach((value, key) => {
            this.log += `\n${key}: ${value} ${this.appeals.get(key)}`;
        });
        return this.log.replace("\n", "");
    }

}

export {Cache}