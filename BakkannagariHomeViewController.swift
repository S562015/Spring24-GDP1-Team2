//
//  ViewController.swift
//  Bakkannagari_Exam03
//
//  Created by Bakkannagari,Shiva Kumar Reddy on 4/18/24.
//

import UIKit

class BakkannagariHomeViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        animals.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // create a cell'
           let cell  = BakkannagariTVOL.dequeueReusableCell(withIdentifier: "BakkannagariCell", for: indexPath)
           //poulate a cell
        cell.textLabel?.text = animals[indexPath.row].name
           // return a cell
           return cell
    }
    
    
    
    
    
   
    
    @IBOutlet weak var BakkannagariTVOL: UITableView!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        self.title = "Animals"
        BakkannagariTVOL.delegate = self;
        BakkannagariTVOL.dataSource = self
    }
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let transition = segue.identifier;
        if(segue.identifier == "BakkannagariDescriptionSegue"){
            let destination = segue.destination as! BakkannagariAnimalController
            destination.name = animals[(BakkannagariTVOL.indexPathForSelectedRow?.row)!].name!
            destination.animalDescription = animals[(BakkannagariTVOL.indexPathForSelectedRow?.row)!].information!
            destination.animalImage = animals[(BakkannagariTVOL.indexPathForSelectedRow?.row)!].imageName
        }
    }

}

