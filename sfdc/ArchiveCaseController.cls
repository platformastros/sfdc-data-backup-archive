public class ArchiveCaseController {
	//Apex properties or variables

    public Id owner {get; set;}
    public Id Id { get; set; }
    public Case cas { get; set; }

    //constructor to get the Case record
    public ArchiveCaseController(ApexPages.StandardController controller) {
        cas =  (Case) controller.getRecord();
        Id = cas.Id;
        System.debug('The case record: ' + cas);
        owner = cas.OwnerId;
    }

    //Method that can is called from the Visual Force page action attribute
    public PageReference archCase() {
       System.debug('Case Owner: ' + owner);
        System.debug('Case Id: ' + Id);
        Case curc = [SELECT FIELDS(STANDARD) FROM Case WHERE Id = :Id LIMIT 1];
        ArchiverCL.archcase(JSON.serialize(curc));
        String accId = curc.AccountId;
        // do some stuff
        try {
    		delete curc;
		} catch (DmlException e) {
    		System.debug('Error Deletign');
		}

        //build your code logic here
       PageReference pageRef = new PageReference('/'+accId);
        pageRef.setRedirect(true);
       return pageRef; //Returns to the case page
    }

    //Method that can is called from the Visual Force page action attribute
    public PageReference backupCase() {
       System.debug('Case Owner: ' + owner);
        System.debug('Case Id: ' + Id);
        // do some stuff
        Case curc = [SELECT FIELDS(STANDARD) FROM Case WHERE Id = :Id LIMIT 1];
        ArchiverCL.backcase(JSON.serialize(curc));
        String accId = curc.AccountId;
        //build your code logic here
       PageReference pageRef = new PageReference('/'+Id);
        pageRef.setRedirect(true);
       return pageRef; //Returns to the case page
    }
}
