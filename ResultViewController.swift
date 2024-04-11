//
//  ResultViewController.swift
//  Bakkannagari_Exam02
//
//  Created by Bakkannagari,Shiva Kumar Reddy on 4/11/24.
//

import UIKit

class ResultViewController: UIViewController {
    
    
    var patinetId = ""
    var systolic:Double = 0.0
    var diastolic:Double = 0.0
    var MBP:Double = 0.0
    var result = ""
    var healthTip = ""
    var img = ""
    
    @IBOutlet weak var imageViewOL: UIImageView!
    @IBOutlet weak var patientIdOL: UILabel!
    @IBOutlet weak var BpOL: UILabel!
    @IBOutlet weak var MBPOL: UILabel!
    @IBOutlet weak var resultOL: UILabel!
    @IBOutlet weak var healthTipOL: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        imageViewOL.image = UIImage(named: img)
        patientIdOL.text = "Patient ID: \(patinetId)"
        BpOL.text = "Blood Pressure: \(systolic) / \(diastolic) mm Hg"
        MBPOL.text = "MBP: \(MBP) (mm hg)"
        resultOL.text = "Result: \(result)"
        healthTipOL.text = "Health Tip: \(healthTip)"
        
        
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
