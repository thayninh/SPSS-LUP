#!/usr/bin/env python
# Prepare the environment
import sys
from qgis.core import *
from PyQt4.QtGui import *
app = QApplication([])
QgsApplication.setPrefixPath("/usr", True)
QgsApplication.initQgis()

# Prepare processing framework 
sys.path.append('/usr/share/qgis/python/plugins') # Folder where Processing is located
from processing.core.Processing import Processing
Processing.initialize()
from processing.tools import *

# Run the algorithm
layerInput = QgsVectorLayer('test.shp', 'test', 'ogr')
general.runalg('qgis:explodelines', layerInput, 'temp.shp')

# Exit applications
QgsApplication.exitQgis()
QApplication.exit()

#print Processing.getAlgorithm("qgis:creategrid")