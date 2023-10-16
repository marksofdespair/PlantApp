class Plant {
    constructor(scienceName = null, commonName = null, lightRequire = null, waterStat = null, potDesc = null){
        this.scienceName = scienceName;
        this.commonName = commonName;
        this.customName = customName
        this.lightRequire = lightRequire;
        this.waterStat = waterStat;
        this.potDesc = potDesc;
    }
    plantInfoOverview(){
        let plantInfo = `Your ${this.scienceName}, more commonly known as ${this.commonName}.`;
        return plantInfo;
    }
}

module.exports = Plant;

