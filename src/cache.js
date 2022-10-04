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
            const cache = this.cache.get(key);
            const value = this.appeals.get(key);
            this.appeals.set(key, value - 1);
            if (value == 0) {
                this.appeals.delete(key);
                this.cache.delete(key);
            }
            return cache;
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